/* 渲染每日行程卡片 + 雨天切換 + 勾選清單 + 即時小工具 */
(function () {
  'use strict';

  function mapsUrl(dest) {
    return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(dest) + '&travelmode=transit';
  }

  function naverName(dest) {
    var places = window.NAVER_PLACES || {};
    return places[dest] || '';
  }

  function naverUrl(name) {
    return 'https://map.naver.com/p/search/' + encodeURIComponent(name);
  }

  function checkKey(key) { return 'busan-check-' + key; }

  function isDone(key) {
    try { return localStorage.getItem(checkKey(key)) === '1'; } catch (e) { return false; }
  }

  function setDone(key, value) {
    try { localStorage.setItem(checkKey(key), value ? '1' : '0'); } catch (e) { /* 私密瀏覽或封鎖儲存時忽略 */ }
  }

  function linkBtns(item) {
    var links = [];
    if (item.map) {
      links.push('<a class="btn btn-map" href="' + mapsUrl(item.map) + '" target="_blank" rel="noopener">Google 導航</a>');
      var kr = naverName(item.map);
      if (kr) links.push('<a class="btn btn-naver" href="' + naverUrl(kr) + '" target="_blank" rel="noopener" title="' + kr + '">Naver 導航</a>');
    }
    if (item.book) links.push('<a class="btn btn-book" href="' + item.book.url + '" target="_blank" rel="noopener">' + item.book.label + '</a>');
    if (item.link) links.push('<a class="btn btn-book" href="' + item.link.url + '" target="_blank" rel="noopener">' + item.link.label + '</a>');
    if (item.links) {
      item.links.forEach(function (l) {
        links.push('<a class="btn btn-book" href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a>');
      });
    }
    return links.length ? '<div class="spot-links">' + links.join('') + '</div>' : '';
  }

  var PASS_LABEL = {
    purple: '釜山Pass Big5・紫色名額',
    blue: '釜山Pass Big5・藍色名額',
    alt: '釜山Pass Big5・可替換名額',
    none: '釜山Pass 不適用'
  };

  function passHtml(pass) {
    if (!pass) return '';
    return '<div class="pass-flag pass-' + pass.tier + '">' +
      '<strong>' + (PASS_LABEL[pass.tier] || '釜山Pass') + '</strong>' + pass.text +
    '</div>';
  }

  function spotHtml(s) {
    var meta = [];
    if (s.price) meta.push('<span class="meta">費用 ' + s.price + '</span>');
    if (s.hours) meta.push('<span class="meta">時間 ' + s.hours + '</span>');
    if (s.duration) meta.push('<span class="meta">停留 ' + s.duration + '</span>');
    if (s.station) meta.push('<span class="meta">交通 ' + s.station + '</span>');

    var links = linkBtns(s);

    return '<div class="spot">' +
      '<div class="spot-time">' + (s.time || '') + '</div>' +
      '<div class="spot-body">' +
        '<h4>' + s.name + (s.en ? ' <span class="en">' + s.en + '</span>' : '') + '</h4>' +
        '<p>' + s.desc + '</p>' +
        passHtml(s.pass) +
        (s.warn ? '<div class="spot-warn"><strong>注意事項</strong><ul>' + s.warn.map(function (w) { return '<li>' + w + '</li>'; }).join('') + '</ul></div>' : '') +
        (s.tips ? '<p class="spot-tip">' + s.tips + '</p>' : '') +
        (meta.length ? '<div class="spot-meta">' + meta.join('') + '</div>' : '') +
        links +
      '</div>' +
    '</div>';
  }

  function planHtml(spots) {
    return '<div class="timeline">' + spots.map(spotHtml).join('') + '</div>';
  }

  function dayHtml(d) {
    var tabs = ['<button class="tab active" type="button" data-plan="sun">主方案</button>'];
    var panes = ['<div class="pane active" data-plan="sun">' + planHtml(d.spots) + '</div>'];

    if (d.rainSpots) {
      tabs.push('<button class="tab" type="button" data-plan="rain">雨天備案</button>');
      panes.push('<div class="pane" data-plan="rain">' +
        (d.rainNote ? '<p class="plan-note rain-note">' + d.rainNote + '</p>' : '') +
        planHtml(d.rainSpots) + '</div>');
    } else if (d.rainNote) {
      panes[0] = '<div class="pane active" data-plan="sun"><p class="plan-note ok-note">' + d.rainNote + '</p>' + planHtml(d.spots) + '</div>';
    }

    if (d.altSpots) {
      tabs.push('<button class="tab" type="button" data-plan="alt">備選方案</button>');
      panes.push('<div class="pane" data-plan="alt">' +
        (d.altNote ? '<p class="plan-note alt-note">' + d.altNote + '</p>' : '') +
        planHtml(d.altSpots) + '</div>');
    }

    return '<article class="day-card" id="' + d.id + '">' +
      '<header class="day-header">' +
        '<div class="day-date"><span class="d-num">' + d.date + '</span><span class="d-week">' + d.weekday + '</span></div>' +
        '<div class="day-title"><h3>' + d.title + '</h3><span class="day-theme">' + d.theme + '</span></div>' +
      '</header>' +
      '<div class="day-transport">' + d.transport + '</div>' +
      (d.stay ? '<div class="day-stay">' + d.stay + '</div>' : '') +
      (tabs.length > 1 ? '<div class="tabs">' + tabs.join('') + '</div>' : '') +
      panes.join('') +
      (d.dayTips ? '<div class="day-tips"><strong>小提醒</strong><ul>' + d.dayTips.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>' : '') +
    '</article>';
  }

  function renderDays() {
    var el = document.getElementById('days-container');
    if (!el) return;
    el.innerHTML = window.TRIP.days.map(dayHtml).join('');
    el.addEventListener('click', function (e) {
      var btn = e.target.closest('.tab');
      if (!btn) return;
      var card = btn.closest('.day-card');
      var plan = btn.dataset.plan;
      card.querySelectorAll('.tab').forEach(function (t) { t.classList.toggle('active', t === btn); });
      card.querySelectorAll('.pane').forEach(function (p) { p.classList.toggle('active', p.dataset.plan === plan); });
    });
  }

  function renderDayNav() {
    var el = document.getElementById('day-nav');
    if (!el) return;
    el.innerHTML = window.TRIP.days.map(function (d) {
      return '<a href="#' + d.id + '">' + d.date + '</a>';
    }).join('');
  }

  function renderCollection(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(function (item) {
      return '<div class="food-item"><div class="fi-info"><h4>' + item.name + '</h4><p>' + item.desc + '</p></div>' +
        linkBtns(item) +
      '</div>';
    }).join('');
  }

  var LEVEL_CLASS = {
    '最優先': 'lv-1',
    '第二優先': 'lv-2',
    '建議提前': 'lv-3',
    '建議訂位': 'lv-2',
    '看是否要吃': 'lv-4',
    '不接受訂位': 'lv-4',
    '已開票': 'lv-done',
    '已訂房': 'lv-done'
  };

  function bookingHtml(b) {
    var meta = [];
    if (b.day) meta.push('<span class="meta">行程 ' + b.day + '</span>');
    if (b.when) meta.push('<span class="meta">何時處理 ' + b.when + '</span>');

    return '<li class="chk-row" data-key="book-' + b.key + '">' +
      '<div class="chk-main">' +
        '<div class="bk-head">' +
          '<span class="bk-level ' + (LEVEL_CLASS[b.level] || 'lv-3') + '">' + b.level + '</span>' +
          '<h4>' + b.name + (b.en ? ' <span class="en">' + b.en + '</span>' : '') + '</h4>' +
        '</div>' +
        (meta.length ? '<div class="spot-meta">' + meta.join('') + '</div>' : '') +
        '<p>' + b.desc + '</p>' +
        (b.fallback ? '<p class="bk-fallback">' + b.fallback + '</p>' : '') +
        linkBtns(b) +
      '</div>' +
    '</li>';
  }

  function renderBookings() {
    var el = document.getElementById('booking-body');
    if (!el || !window.TRIP.bookings) return;

    var html = window.TRIP.bookingGroups.map(function (g) {
      var items = window.TRIP.bookings.filter(function (b) { return b.group === g.id; });
      if (!items.length) return '';
      return '<div class="card">' +
        '<h3>' + g.title + progressTag('bk-' + g.id) + '</h3>' +
        (g.note ? '<p class="group-note">' + g.note + '</p>' : '') +
        '<ul class="chk-list" data-progress="bk-' + g.id + '">' + items.map(bookingHtml).join('') + '</ul>' +
      '</div>';
    }).join('');

    if (window.TRIP.bookingFree) {
      html += '<div class="card free-note"><h3>不用訂位的部分</h3><p>' + window.TRIP.bookingFree + '</p></div>';
    }
    el.innerHTML = html;
  }

  function renderPrep() {
    var el = document.getElementById('prep-body');
    if (!el || !window.TRIP.prepGroups) return;

    el.innerHTML = window.TRIP.prepGroups.map(function (g) {
      return '<div class="card">' +
        '<h3>' + g.title + progressTag('prep-' + g.id) + '</h3>' +
        (g.when ? '<p class="group-note">建議時間：' + g.when + '</p>' : '') +
        '<ul class="chk-list" data-progress="prep-' + g.id + '">' + g.items.map(function (item) {
          return '<li class="chk-row" data-key="prep-' + g.id + '-' + item.key + '">' +
            '<div class="chk-main"><p class="chk-text">' + item.text + '</p>' + linkBtns(item) + '</div>' +
          '</li>';
        }).join('') + '</ul>' +
      '</div>';
    }).join('');
  }

  function renderBusanPass() {
    var el = document.getElementById('pass-body');
    var p = window.TRIP.busanPass;
    if (!el || !p) return;

    var facts = [
      ['票種', p.name + '　' + p.price],
      ['規則', p.rule],
      ['效期', p.validity],
      ['兌換', p.redeem]
    ].map(function (row) {
      return '<tr><th>' + row[0] + '</th><td>' + row[1] + '</td></tr>';
    }).join('');

    var picks = p.picks.map(function (k) {
      return '<li class="pass-pick pass-' + k.tier + '">' +
        '<div class="pass-slot">' + k.slot + '</div>' +
        '<div class="pass-pick-body">' +
          '<h4>' + k.name + '</h4>' +
          '<div class="spot-meta"><span class="meta">行程 ' + k.day + '</span><span class="meta">' + k.price + '</span></div>' +
          '<p>' + k.note + '</p>' +
        '</div>' +
      '</li>';
    }).join('');

    function bullets(list) {
      return '<ul>' + list.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>';
    }

    el.innerHTML =
      '<div class="card highlight">' +
        '<h3>這趟怎麼用滿 Big5</h3>' +
        '<div class="table-wrap"><table>' + facts + '</table></div>' +
        '<ol class="pass-picks">' + picks + '</ol>' +
        '<p class="pass-saving">' + p.saving + '</p>' +
        linkBtns(p) +
      '</div>' +
      '<div class="card"><h3>不能用 Pass 的部分</h3>' + bullets(p.excluded) + '</div>' +
      '<div class="card"><h3>名額用不完或行程有變時</h3>' + bullets(p.swaps) + '</div>' +
      '<div class="card"><h3>使用提醒</h3>' + bullets(p.tips) + '</div>';
  }

  function progressTag(id) {
    return '<span class="progress" id="pg-' + id + '"></span>';
  }

  function updateProgress(list) {
    var id = list.dataset.progress;
    if (!id) return;
    var tag = document.getElementById('pg-' + id);
    if (!tag) return;
    var rows = list.querySelectorAll('.chk-row');
    var done = list.querySelectorAll('.chk-row.done').length;
    tag.textContent = done + ' / ' + rows.length;
    tag.classList.toggle('all-done', done === rows.length && rows.length > 0);
  }

  function attachChecks(root) {
    root.querySelectorAll('.chk-row[data-key]').forEach(function (row) {
      var key = row.dataset.key;
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'chk';
      input.checked = isDone(key);
      input.setAttribute('aria-label', '標記為已完成');
      row.classList.toggle('done', input.checked);
      row.prepend(input);
      row.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        if (e.target !== input) input.checked = !input.checked;
        row.classList.toggle('done', input.checked);
        setDone(key, input.checked);
        var list = row.closest('.chk-list');
        if (list) updateProgress(list);
      });
    });
    root.querySelectorAll('.chk-list[data-progress]').forEach(updateProgress);
  }

  function attachResets() {
    document.querySelectorAll('.reset-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var scope = document.getElementById(btn.dataset.target);
        if (!scope) return;
        scope.querySelectorAll('.chk-row[data-key]').forEach(function (row) {
          var input = row.querySelector('.chk');
          if (input) input.checked = false;
          row.classList.remove('done');
          setDone(row.dataset.key, false);
        });
        scope.querySelectorAll('.chk-list[data-progress]').forEach(updateProgress);
      });
    });
  }

  function enhanceChecklists() {
    document.querySelectorAll('.checklist li').forEach(function (li) {
      var key = li.dataset.key;
      if (!key) return;
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'chk';
      input.checked = isDone(key);
      input.setAttribute('aria-label', '標記為已完成');
      li.classList.toggle('done', input.checked);
      li.prepend(input);
      li.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        if (e.target !== input) input.checked = !input.checked;
        li.classList.toggle('done', input.checked);
        setDone(key, input.checked);
      });
    });

    setupSectionToggle('packing-toggle', 'packing-body');
    setupSectionToggle('booking-toggle', 'booking-body');
    setupSectionToggle('prep-toggle', 'prep-body');
  }

  function setupSectionToggle(toggleId, bodyId) {
    var toggle = document.getElementById(toggleId);
    var body = document.getElementById(bodyId);
    if (!toggle || !body) return;
    toggle.addEventListener('click', function () {
      var hidden = body.style.display === 'none';
      body.style.display = hidden ? '' : 'none';
      toggle.textContent = hidden ? '收合' : '展開';
    });
  }

  function loadWeather() {
    var el = document.getElementById('weather-widget');
    if (!el) return;
    var url = 'https://api.open-meteo.com/v1/forecast?latitude=35.1796&longitude=129.0756&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FSeoul&forecast_days=7';
    var icons = { 0: '晴', 1: '晴時多雲', 2: '多雲', 3: '陰', 45: '霧', 48: '霧', 51: '毛毛雨', 53: '小雨', 55: '雨', 61: '小雨', 63: '雨', 65: '大雨', 71: '雪', 80: '陣雨', 81: '陣雨', 82: '雷雨', 95: '雷雨' };
    fetch(url).then(function (r) { return r.json(); }).then(function (data) {
      var cur = data.current;
      var html = '<div class="wx-now">釜山現在 <strong>' + Math.round(cur.temperature_2m) + '°C</strong> ' + (icons[cur.weather_code] || '') + '</div><div class="wx-days">';
      for (var i = 0; i < data.daily.time.length; i++) {
        var dt = new Date(data.daily.time[i] + 'T12:00:00');
        var wd = ['日', '一', '二', '三', '四', '五', '六'][dt.getDay()];
        html += '<div class="wx-day"><span>' + (dt.getMonth() + 1) + '/' + dt.getDate() + '(' + wd + ')</span>' +
          '<span class="wx-icon">' + (icons[data.daily.weather_code[i]] || '天氣') + '</span>' +
          '<span>' + Math.round(data.daily.temperature_2m_min[i]) + '-' + Math.round(data.daily.temperature_2m_max[i]) + '°</span>' +
          '<span class="wx-rain">雨 ' + data.daily.precipitation_probability_max[i] + '%</span></div>';
      }
      el.innerHTML = html + '</div>';
    }).catch(function () { el.style.display = 'none'; });
  }

  function loadFx() {
    var el = document.getElementById('fx-widget');
    if (!el) return;
    var fallbackRate = 0.0235;
    var quickAmounts = [1000, 5000, 10000, 50000];
    var els = {};

    function group(value) {
      return String(Math.round(value || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function updateFromKrw() {
      var krw = Number(els.krw.value) || 0;
      var rate = Number(els.rate.value) || fallbackRate;
      els.twd.value = Math.round(krw * rate);
      syncChips(krw);
    }

    function updateFromTwd() {
      var twd = Number(els.twd.value) || 0;
      var rate = Number(els.rate.value) || fallbackRate;
      els.krw.value = rate ? Math.round(twd / rate) : 0;
      syncChips(Number(els.krw.value));
    }

    function syncChips(krw) {
      var rate = Number(els.rate.value) || fallbackRate;
      for (var i = 0; i < els.chips.length; i++) {
        var amount = Number(els.chips[i].dataset.krw);
        els.chips[i].lastChild.textContent = 'NT$' + group(amount * rate);
        var on = amount === krw;
        els.chips[i].classList.toggle('is-on', on);
        els.chips[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      }
    }

    function setRate(rate, label) {
      els.rate.value = rate.toFixed(5);
      els.rateLabel.textContent = label + ' ₩1,000 ≈ NT$' + (rate * 1000).toFixed(1);
      updateFromKrw();
    }

    var chipHtml = '';
    for (var i = 0; i < quickAmounts.length; i++) {
      chipHtml += '<button type="button" class="fx-chip" data-krw="' + quickAmounts[i] +
        '" aria-pressed="false"><span class="fx-chip-krw">₩' + group(quickAmounts[i]) +
        '</span><span class="fx-chip-twd">NT$0</span></button>';
    }

    el.innerHTML =
      '<div class="fx-head">' +
        '<span class="fx-title">匯率計算器</span>' +
        '<span class="fx-badge" id="fx-rate-label">載入中</span>' +
      '</div>' +
      '<div class="fx-calc" aria-label="韓元台幣匯率計算器">' +
        '<label class="fx-field">' +
          '<span class="fx-name">韓元 KRW</span>' +
          '<span class="fx-input"><span class="fx-sym">₩</span><input id="fx-krw" type="number" inputmode="decimal" min="0" step="1000" value="10000"></span>' +
        '</label>' +
        '<span class="fx-swap" aria-hidden="true">⇄</span>' +
        '<label class="fx-field">' +
          '<span class="fx-name">台幣 TWD</span>' +
          '<span class="fx-input"><span class="fx-sym">NT$</span><input id="fx-twd" type="number" inputmode="decimal" min="0" step="10"></span>' +
        '</label>' +
      '</div>' +
      '<div class="fx-quick">' +
        '<span class="fx-quick-label">常見金額</span>' +
        '<div class="fx-chips">' + chipHtml + '</div>' +
      '</div>' +
      '<label class="fx-rate-row"><span>自訂匯率</span>' +
        '<input id="fx-rate" type="number" inputmode="decimal" min="0" step="0.0001"></label>';

    els.krw = document.getElementById('fx-krw');
    els.twd = document.getElementById('fx-twd');
    els.rate = document.getElementById('fx-rate');
    els.rateLabel = document.getElementById('fx-rate-label');
    els.chips = el.querySelectorAll('.fx-chip');

    els.krw.addEventListener('input', updateFromKrw);
    els.twd.addEventListener('input', updateFromTwd);
    els.rate.addEventListener('input', updateFromKrw);
    for (var j = 0; j < els.chips.length; j++) {
      els.chips[j].addEventListener('click', function () {
        els.krw.value = this.dataset.krw;
        updateFromKrw();
      });
    }
    setRate(fallbackRate, '估算');

    fetch('https://open.er-api.com/v6/latest/KRW').then(function (r) { return r.json(); }).then(function (data) {
      if (!data.rates || !data.rates.TWD) throw new Error('no rate');
      setRate(data.rates.TWD, '即時');
    }).catch(function () {
      els.rateLabel.textContent = '離線估算 ₩1,000 ≈ NT$23.5';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderDayNav();
    renderDays();
    renderBookings();
    renderPrep();
    renderBusanPass();
    attachChecks(document);
    attachResets();
    renderCollection('food-featured', window.TRIP.foodFeatured);
    renderCollection('food-classic', window.TRIP.foodClassic);
    renderCollection('pocket-rain', window.TRIP.pocketRain);
    renderCollection('pocket-extra', window.TRIP.pocketExtra);
    enhanceChecklists();
    loadWeather();
    loadFx();
  });
}());
