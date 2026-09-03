/* 渲染每日行程卡片 + 雨天切換 + 勾選清單 + 即時小工具 */
(function () {
  'use strict';

  function mapsUrl(dest) {
    return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(dest) + '&travelmode=transit';
  }

  function spotHtml(s) {
    var meta = [];
    if (s.price) meta.push('<span class="meta">費用 ' + s.price + '</span>');
    if (s.hours) meta.push('<span class="meta">時間 ' + s.hours + '</span>');
    if (s.duration) meta.push('<span class="meta">停留 ' + s.duration + '</span>');
    if (s.station) meta.push('<span class="meta">交通 ' + s.station + '</span>');

    var links = [];
    if (s.map) links.push('<a class="btn btn-map" href="' + mapsUrl(s.map) + '" target="_blank" rel="noopener">導航</a>');
    if (s.book) links.push('<a class="btn btn-book" href="' + s.book.url + '" target="_blank" rel="noopener">' + s.book.label + '</a>');

    return '<div class="spot">' +
      '<div class="spot-time">' + (s.time || '') + '</div>' +
      '<div class="spot-body">' +
        '<h4>' + s.name + (s.en ? ' <span class="en">' + s.en + '</span>' : '') + '</h4>' +
        '<p>' + s.desc + '</p>' +
        (s.warn ? '<div class="spot-warn"><strong>注意事項</strong><ul>' + s.warn.map(function (w) { return '<li>' + w + '</li>'; }).join('') + '</ul></div>' : '') +
        (s.tips ? '<p class="spot-tip">' + s.tips + '</p>' : '') +
        (meta.length ? '<div class="spot-meta">' + meta.join('') + '</div>' : '') +
        (links.length ? '<div class="spot-links">' + links.join('') + '</div>' : '') +
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
        (item.map ? '<a class="btn btn-map" target="_blank" rel="noopener" href="' + mapsUrl(item.map) + '">導航</a>' : '') +
      '</div>';
    }).join('');
  }

  function enhanceChecklists() {
    document.querySelectorAll('.checklist li').forEach(function (li, index) {
      var key = 'busan-check-' + index + '-' + li.textContent.trim().slice(0, 16);
      var checked = localStorage.getItem(key) === '1';
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'chk';
      input.checked = checked;
      li.classList.toggle('done', checked);
      li.prepend(input);
      li.addEventListener('click', function (e) {
        if (e.target !== input) input.checked = !input.checked;
        li.classList.toggle('done', input.checked);
        localStorage.setItem(key, input.checked ? '1' : '0');
      });
    });

    var toggle = document.getElementById('packing-toggle');
    var body = document.getElementById('packing-body');
    if (toggle && body) {
      toggle.addEventListener('click', function () {
        var hidden = body.style.display === 'none';
        body.style.display = hidden ? '' : 'none';
        toggle.textContent = hidden ? '收合' : '展開';
      });
    }
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
    fetch('https://open.er-api.com/v6/latest/KRW').then(function (r) { return r.json(); }).then(function (data) {
      if (!data.rates || !data.rates.TWD) throw new Error('no rate');
      var rate = data.rates.TWD;
      el.innerHTML = '即時匯率：<strong>₩1,000 約 NT$' + (rate * 1000).toFixed(1) + '</strong>' +
        '<span class="fx-samples">₩10,000 約 NT$' + (rate * 10000).toFixed(0) + '・₩50,000 約 NT$' + (rate * 50000).toFixed(0) + '</span>';
    }).catch(function () { el.innerHTML = '匯率小工具暫時無法載入，抓 ₩1,000 約 NT$23–25 估算。'; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderDayNav();
    renderDays();
    renderCollection('food-featured', window.TRIP.foodFeatured);
    renderCollection('food-classic', window.TRIP.foodClassic);
    renderCollection('pocket-rain', window.TRIP.pocketRain);
    renderCollection('pocket-extra', window.TRIP.pocketExtra);
    enhanceChecklists();
    loadWeather();
    loadFx();
  });
}());
