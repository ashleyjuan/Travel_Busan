// 釜山行程資料 — 2026/10/2（五）出發 → 10/7（三）返程
window.TRIP = {
  days: [
    {
      id: 'd1', date: '10/2', weekday: '週五', title: '啟程：台北 → 釜山・西面入住',
      theme: 'BX794 抵達日・不排硬行程',
      stay: '住 Gem Stay Seomyeon 第 1 晚。抵達後只處理交通卡、晚餐與便利採買，讓大家先進入旅行節奏。',
      transport: '13:30 桃園 T2 起飛 → 17:05 金海機場。機場到西面可搭輕軌轉地鐵約 45-55 分鐘；行李多或同行者多，叫車直達會舒服很多。',
      spots: [
        { time: '11:30', name: '桃園機場 T2 報到', en: 'TPE Terminal 2', desc: '釜山航空 BX794，建議起飛前 2 小時抵達。先確認行李額度、液體規定與行動電源放隨身。', duration: '2 小時', map: 'Taoyuan International Airport Terminal 2' },
        { time: '13:30', name: '起飛前往釜山', en: 'BX794', desc: '飛行約 2 小時 35 分。機上先把 Naver Map、Papago、Kakao T 放到手機首頁。', duration: '2 小時 35 分' },
        { time: '17:05', name: '抵達金海國際機場', en: 'Gimhae International Airport', desc: '入境後買或加值 T-money / Cashbee。若要叫車，先把 Gem Stay Seomyeon 英文地址準備好。', station: '金海機場', map: 'Gimhae International Airport' },
        { time: '19:00', name: '入住 Gem Stay Seomyeon', en: 'Seomyeon', desc: '放好行李後在西面商圈覓食，第一晚不要排遠距離夜景，留體力給隔天。', map: 'Gem Stay Seomyeon Busan' },
        { time: '20:00', name: '西面晚餐與便利採買', en: 'Seomyeon Food Street', desc: '附近可吃豬肉湯飯、烤肉、密麵或便利商店宵夜。順手補水、雨具、零食和隔天早餐。', price: '₩12,000-25,000／人', map: 'Seomyeon Food Alley Busan' }
      ],
      rainNote: '移動日不受天氣影響；若抵達時下雨，直接叫車到住宿最省心。',
      dayTips: ['西面站出口多，約集合點時要講清楚出口號碼或店名。']
    },
    {
      id: 'd2', date: '10/3', weekday: '週六', title: '甘川洞・松島海上纜車・南浦市場・廣安里無人機秀',
      theme: '西側景點日・週六夜景重點',
      stay: '住 Gem Stay Seomyeon 第 2 晚。晚上看完廣安里無人機秀後搭地鐵 2 號線回西面。',
      transport: '西面 → 土城站 → 社區小巴到甘川洞；甘川洞到松島建議叫車；松島回南浦吃市場小吃；晚上南浦或札嘎其一帶轉車到廣安里。',
      spots: [
        { time: '09:00', name: '甘川洞文化村', en: 'Gamcheon Culture Village', desc: '彩色山城、壁畫巷、小王子拍照點。早點抵達比較不曬也避開人潮，買蓋章地圖慢慢走。', price: '免費', duration: '2.5 小時', station: '土城站轉小巴', map: 'Gamcheon Culture Village Busan' },
        { time: '12:00', name: '甘川洞午餐或咖啡', en: 'Village Cafe', desc: '村內有展望咖啡與簡餐，但選擇不如南浦多；若大家餓得快，就先簡單吃再移動。', price: '₩8,000-18,000／人', map: 'Gamcheon Culture Village Cafe' },
        { time: '13:30', name: '松島天空步道・海上纜車', en: 'Songdo Marine Cable Car', desc: '先走松島天空步道，再搭海上纜車到松島天空公園。想看腳下海面就選透明地板 Crystal Cruise。', price: '依車廂票種', duration: '2 小時', station: '建議短程叫車', map: 'Songdo Marine Cable Car Busan', book: { label: '官方資訊', url: 'https://www.busanaircruise.co.kr/' } },
        { time: '16:30', name: 'BIFF 廣場・國際市場・札嘎其市場', en: 'Nampo Markets', desc: '回南浦洞吃堅果糖餅、忠武飯捲、魚板、辣炒年糕。想吃海鮮可在札嘎其市場提早晚餐。', price: '小吃 ₩3,000 起', duration: '2 小時', map: 'BIFF Square Busan' },
        { time: '19:00', name: '廣安里 M Drone Light Show', en: 'Gwangalli Beach', desc: '2026/10/3 是週六，廣安里固定週六晚間展演；10 月場次常見 19:00、21:00，仍以當天公告為準。', price: '免費', duration: '1 小時', station: '地鐵 2 號線', map: 'Gwangalli Beach Busan' }
      ],
      rainNote: '若大雨或強風，松島纜車與無人機秀可能受影響，改成南浦洞室內採買與 Centum City 備案。',
      rainSpots: [
        { time: '10:30', name: '國際市場・富平罐頭市場', en: 'Gukje / Bupyeong Market', desc: '多數區域有遮雨，適合小吃、伴手禮、雜貨採買。', price: '自由消費', duration: '2.5 小時', map: 'Gukje Market Busan', book: { label: '市場資訊', url: 'https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000301003001000&uc_seq=400' } },
        { time: '14:00', name: '樂天百貨光復店', en: 'Lotte Department Store Gwangbok', desc: '百貨、超市、展望台都集中在同一棟；雨天很穩。', price: '自由消費', duration: '2 小時', map: 'Lotte Department Store Gwangbok Busan', book: { label: '營業資訊', url: 'https://global.lotteshopping.com/eng/store/main?cstrCd=0333' } },
        { time: '17:00', name: '西面地下街', en: 'Seomyeon Underground Shopping', desc: '回西面逛地下街、吃晚餐，晚上早點休息。', duration: '2 小時', map: 'Seomyeon Underground Shopping Center Busan', book: { label: '營業資訊', url: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=70895' } }
      ],
      dayTips: ['甘川洞坡多，今天務必穿好走的鞋。', '松島海上纜車遇強風可能暫停，出發前查一次營運狀態。', '無人機秀前半小時到沙灘比較好找位置。']
    },
    {
      id: 'd3', date: '10/4', weekday: '週日', title: '西面退房・ARTE MUSEUM・廣安里入住・Spa Land',
      theme: '換宿日・室內藝術與汗蒸幕',
      stay: '上午退 Gem Stay Seomyeon，下午入住光州里1號酒店第 1 晚。行李先寄放廣安里，晚上泡完湯輕鬆回飯店。',
      transport: '換宿日建議用叫車處理行李。廣安里飯店 → 影島 ARTE MUSEUM → 回廣安里入住 → Centum City Spa Land，動線雖有跨區，但都適合用短程叫車或地鐵銜接。',
      spots: [
        { time: '10:00', name: '退房與行李轉場', en: 'Move to Gwangalli', desc: 'Gem Stay Seomyeon 退房 09:00-11:00。先把行李送到廣安里飯店寄放，避免拖行李去影島。', duration: '1 小時', map: 'Hotel 1 Gwangalli Busan' },
        { time: '12:00', name: 'ARTE MUSEUM 釜山', en: 'Arte Museum Busan', desc: '影島沉浸式數位藝術館，以海洋、自然、光影空間為主，換宿日排室內很剛好。', price: '依官網票價', hours: '常見 10:00-20:00', duration: '2 小時', station: '影島', map: 'Arte Museum Busan', book: { label: '官網資訊', url: 'https://artemuseum.com/busan' } },
        { time: '15:00', name: '白淺灘文化村短停', en: 'Huinnyeoul Culture Village', desc: '如果大家還有精神，可順路看海崖村與咖啡店；若累了就跳過，直接回飯店。', price: '免費', duration: '1 小時', map: 'Huinnyeoul Culture Village Busan' },
        { time: '16:00', name: '入住光州里1號酒店', en: 'Hotel 1 Gwangalli', desc: '完成入住、整理行李，換輕便衣物前往 Centum City。', map: 'Hotel 1 Gwangalli Busan' },
        { time: '18:00', name: '新世界 Centum City・Spa Land', en: 'Spa Land Centum City', desc: '高級韓式汗蒸幕，溫泉池、汗蒸房與休息區都在新世界百貨內。很適合修復前兩天的步行量。', price: '依現場／平台票價', hours: '常見 09:00-22:00', duration: '3-4 小時', station: 'Centum City 站', map: 'Spa Land Centum City Busan' }
      ],
      rainNote: '今天本來就是雨天友善行程：ARTE MUSEUM 與 Spa Land 都是室內，白淺灘可直接刪掉。',
      dayTips: ['Spa Land 多為 4 小時制，泡湯前後記得補水。', '進汗蒸幕不需要帶太多東西，貴重物品照現場置物櫃規則處理。']
    },
    {
      id: 'd4', date: '10/5', weekday: '週一', title: '海雲台・清沙埔 DIART COFFEE・膠囊列車・海岸列車',
      theme: '海線精華日・甜點與日落',
      stay: '住光州里1號酒店第 2 晚。今天以海線為主，不再塞跨區景點。',
      transport: '廣安里 → 海雲台 → 尾浦／清沙埔。最佳玩法是天空膠囊列車搭單程，回程用海岸列車或計程車銜接。',
      spots: [
        { time: '09:30', name: '海雲台海水浴場・冬柏島', en: 'Haeundae Beach / Dongbaekseom', desc: '先走沙灘與冬柏島，APEC 世峰樓、燈塔、海雲台天際線都很順。', price: '免費', duration: '2 小時', station: '海雲台站', map: 'Haeundae Beach Busan' },
        { time: '11:30', name: 'DIART COFFEE・土耳其蜂蜜奶油麵包', en: 'DIART Coffee', desc: '清沙埔人氣咖啡店，招牌 Kaymak 風格蜂蜜奶油麵包建議早點吃，下午可能售完。', price: '依店內消費', duration: '1 小時', map: 'DIART Coffee Cheongsapo Busan' },
        { time: '13:30', name: '天空膠囊列車', en: 'Haeundae Sky Capsule', desc: '復古小車廂沿海慢慢前進，是這趟釜山最有代表性的畫面。建議預約尾浦 → 清沙埔方向。', price: '依車廂票種', duration: '35 分鐘', station: '尾浦站／清沙埔站', map: 'Haeundae Blue Line Park Mipo Station', book: { label: 'Blue Line Park', url: 'https://www.bluelinepark.com/' } },
        { time: '15:00', name: '清沙埔紅白燈塔・踏石展望台', en: 'Cheongsapo', desc: '小漁港、燈塔、海上展望台與鐵道海景都集中，適合慢慢拍照等日落。', price: '免費', duration: '2 小時', map: 'Cheongsapo Daritdol Observatory Busan' },
        { time: '18:00', name: '清沙埔烤貝晚餐', en: 'Grilled Shellfish', desc: '清沙埔烤貝一條街，兩人一份套餐通常份量很夠。', price: '依套餐與時價', duration: '1.5 小時', map: 'Cheongsapo Grilled Shellfish Street Busan' },
        { time: '20:00', name: '海岸列車回尾浦', en: 'Beach Train', desc: '回程搭海岸列車，用不同高度再看一次海岸線；回尾浦後轉車回廣安里。', price: '依票種', duration: '30 分鐘', map: 'Haeundae Blue Line Park Cheongsapo Station' }
      ],
      rainNote: '若雨勢大或海邊風強，膠囊列車可以保留，戶外燈塔與展望台縮短，改去 Centum City 或海雲台市場。',
      rainSpots: [
        { time: '10:30', name: '海雲台市場', en: 'Haeundae Traditional Market', desc: '吃鱈魚湯、辣炒年糕、魚板，雨天也能快速補餐。', price: '₩5,000 起', duration: '1.5 小時', map: 'Haeundae Traditional Market Busan', book: { label: '市場資訊', url: 'https://visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=294' } },
        { time: '13:00', name: '釜山市立美術館或 Shinsegae', en: 'Busan Museum of Art / Shinsegae', desc: '海線天候太差就移到室內，Centum City 交通最方便；市立美術館出發前先查重開公告。', duration: '2-3 小時', map: 'Busan Museum of Art', links: [{ label: '美術館公告', url: 'https://art.busan.go.kr/eng/index.nm' }, { label: 'Shinsegae 資訊', url: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=94755' }] },
        { time: '17:30', name: '廣安里海景咖啡或晚餐', en: 'Gwangalli Cafe', desc: '回飯店附近用餐，留力給機張日。', duration: '2 小時', map: 'Gwangalli Beach Busan' }
      ],
      dayTips: ['若先去 DIART，再搭膠囊列車，可以用計程車在清沙埔與尾浦之間銜接。', '膠囊列車車廂固定人數，訂票時要一次抓同行人數。']
    },
    {
      id: 'd5', date: '10/6', weekday: '週二', title: '海東龍宮寺・Skyline Luge・Outlet／機張海鮮',
      theme: '機張 Osiria 冒險日',
      stay: '住光州里1號酒店第 3 晚。最後一個完整旅遊日，晚上回廣安里整理行李。',
      transport: '廣安里出發往 Osiria／機張。龍宮寺、Skyline Luge、Outlet、樂天世界都在同一生活圈，適合排成一日線。',
      spots: [
        { time: '09:00', name: '海東龍宮寺', en: 'Haedong Yonggungsa Temple', desc: '建在海岸岩石上的寺廟，早上光線較好、人潮比較可控。階梯多，慢慢走。', price: '免費', duration: '1.5 小時', station: 'Osiria 轉公車／叫車', map: 'Haedong Yonggungsa Temple Busan' },
        { time: '11:00', name: 'Skyline Luge Busan', en: 'Skyline Luge', desc: '搭纜椅上山，再自己操控滑車下坡。比樂園輕量，但非常有記憶點；不玩的人可在周邊咖啡或 Outlet 等。', price: '依趟數票種', hours: '常見 10:00-18:00', duration: '2 小時', station: 'Osiria', map: 'Skyline Luge Busan', book: { label: '官方資訊', url: 'https://busan.skylineluge.kr/en/' } },
        { time: '13:30', name: '龍宮寺周邊午餐', en: 'Seafood Lunch', desc: '可吃海鮮麵疙瘩、魚板、簡單韓食；想吃雪蟹則改往機張市場，時間要多抓。', price: '₩12,000 起', duration: '1 小時', map: 'Gijang Market Busan' },
        { time: '15:00', name: '樂天 Premium Outlet 東釜山', en: 'Lotte Premium Outlets', desc: '購物、咖啡、超市採買都方便；若有人想玩樂天世界，可分組後約晚餐集合。', price: '自由消費', duration: '2.5 小時', map: 'Lotte Premium Outlets Dongbusan' },
        { time: '19:00', name: '回廣安里夜海與打包', en: 'Gwangalli Night', desc: '最後一晚留給廣安大橋夜景，順便整理行李、確認隔天機場交通。', duration: '1.5 小時', map: 'Gwangalli Beach Busan' }
      ],
      rainNote: '若 Luge 因天候停駛，機張日改成龍宮寺短停 + Outlet + 樂天世界／咖啡店。',
      rainSpots: [
        { time: '10:30', name: '樂天 Premium Outlet 東釜山', en: 'Lotte Premium Outlets', desc: '有室內商店與餐飲，雨天比戶外 Luge 穩。', duration: '3 小時', map: 'Lotte Premium Outlets Dongbusan', book: { label: '營業資訊', url: 'https://global.lotteshopping.com/eng/store/main?cstrCd=0352' } },
        { time: '14:30', name: '樂天世界釜山', en: 'Lotte World Adventure Busan', desc: '若同行者想玩樂園，可改以樂園為主；不玩的人繼續 Outlet。', price: '依票種', duration: '3 小時', map: 'Lotte World Adventure Busan', book: { label: '票價資訊', url: 'https://adventurebusan.lotteworld.com/price/price' } },
        { time: '19:00', name: '廣安里晚餐', en: 'Dinner near Hotel', desc: '回住宿附近吃烤肉、炸雞或海景咖啡，行李也比較好整理。', map: 'Gwangalli Beach Busan' }
      ],
      dayTips: ['Luge 最後售票時間會早於關門，別排太晚。', '機張市場雪蟹是時價，入座前先確認總價與料理費。', '今天是最後完整日，別把晚上排太滿。']
    },
    {
      id: 'd6', date: '10/7', weekday: '週三', title: '廣安里早餐・退房・前往金海機場',
      theme: '返程日・保留緩衝',
      stay: '光州里1號酒店退房 06:00-11:00。航班 14:15 起飛，早上只安排飯店周邊。',
      transport: '目標 11:15 從廣安里出發，11:45-12:00 抵達金海機場。多人或行李多，建議叫車；大眾運輸要抓轉乘緩衝。',
      spots: [
        { time: '08:30', name: '廣安里早餐與最後散步', en: 'Gwangalli Morning', desc: '在海邊吃早餐、拍最後一張廣安大橋。若下雨就直接在飯店附近咖啡店。', duration: '1 小時', map: 'Gwangalli Beach Busan' },
        { time: '10:30', name: '退房與行李檢查', en: 'Check-out', desc: '液體、泡菜、醬料類伴手禮放托運；行動電源放隨身。確認護照、錢包、手機。', duration: '30 分鐘' },
        { time: '11:15', name: '出發前往金海機場', en: 'To Gimhae Airport', desc: '叫車最安心；若搭地鐵轉輕軌，務必抓足轉乘與月台步行時間。', duration: '45-75 分鐘', map: 'Gimhae International Airport' },
        { time: '14:15', name: 'BX791 回台北', en: 'PUS → TPE', desc: '15:50 抵達桃園 T2。上機前把退稅、托運、伴手禮都處理完。', duration: '2 小時 35 分' }
      ],
      rainNote: '返程日不受天氣影響；雨天就取消海邊散步，提早去機場。',
      dayTips: ['國際線建議起飛前 2.5 小時抵達。', '機場餐飲選擇不如市區，早餐不要吃太晚。']
    }
  ],

  bookings: [
    {
      key: 'sky-capsule', group: 'online', level: '最優先',
      name: '天空膠囊列車 Sky Capsule', en: 'Haeundae Sky Capsule',
      day: '10/5（一）13:30', when: '越早越好',
      desc: '這趟最該優先處理的一項。車廂人數固定、班次有限，熱門時段常提早數週售完。請訂「尾浦 → 清沙埔」單程，並一次抓齊同行人數，避免拆成兩個車廂。',
      fallback: '若膠囊列車沒票，海岸列車仍保留海線體驗，行程不用大改。',
      book: { label: 'Blue Line Park', url: 'https://www.bluelinepark.com/' }
    },
    {
      key: 'skyline-luge', group: 'online', level: '第二優先',
      name: 'Skyline Luge Busan', en: 'Skyline Luge',
      day: '10/6（二）11:00', when: '出發前 2 週',
      desc: '依趟數計價，線上套票通常比現場便宜。先決定要玩幾趟，並確認不玩的人可否只買纜椅或在周邊等。',
      fallback: '天候不佳會停駛，出發前一天要再看官方公告；停駛就改 Outlet／樂天世界。',
      book: { label: '官方訂票', url: 'https://busan.skylineluge.kr/en/' }
    },
    {
      key: 'spa-land', group: 'online', level: '建議提前',
      name: 'Spa Land（新世界 Centum City）', en: 'Spa Land Centum City',
      day: '10/4（日）18:00', when: '出發前 1 週',
      desc: '現場可買票，但 10/4 是週日、人潮多。多為 4 小時制，先決定入場時間再回推 ARTE MUSEUM 的離場時間。',
      book: { label: 'Spa Land 資訊', url: 'https://www.shinsegae.com/store/entertainment/centum-spaland.do?storeCd=SC00008' }
    },
    {
      key: 'arte-museum', group: 'online', level: '建議提前',
      name: 'ARTE MUSEUM 釜山', en: 'Arte Museum Busan',
      day: '10/4（日）12:00', when: '出發前 1 週',
      desc: '線上預售常有折扣。10/4 是換宿日、時間卡得緊，先訂好時段比較不會被排隊吃掉行程。',
      book: { label: '官網票價', url: 'https://artemuseum.com/busan' }
    },
    {
      key: 'songdo-cable', group: 'online', level: '建議提前',
      name: '松島海上纜車', en: 'Songdo Marine Cable Car',
      day: '10/3（六）13:30', when: '出發前 1 週',
      desc: '10/3 是週六，現場排隊最久。想看腳下海面要指定透明地板 Crystal Cruise 車廂，票價與一般車廂不同。',
      fallback: '強風可能暫停營運，當天出門前查一次；停駛就走南浦洞室內備案。',
      book: { label: '官網資訊', url: 'https://www.busanaircruise.co.kr/' }
    },
    {
      key: 'cheongsapo-shell', group: 'dining', level: '建議訂位',
      name: '清沙埔烤貝晚餐', en: 'Grilled Shellfish',
      day: '10/5（一）18:00', when: '抵達後 1–2 天',
      desc: '一條街上的熱門店 18:00 前後會排隊。可請住宿代打電話訂位，或提早到 17:30 入座。兩人一份套餐通常份量很夠。',
      map: 'Cheongsapo Grilled Shellfish Street Busan'
    },
    {
      key: 'gijang-crab', group: 'dining', level: '看是否要吃',
      name: '機張市場雪蟹', en: 'Gijang Snow Crab',
      day: '10/6（二）午餐替代方案', when: '先在群組決定',
      desc: '目前行程寫「想吃雪蟹則改往機張市場」。若要吃，這是時價制：入座前務必先確認總價與料理費，並多抓 1 小時；也可先訂店家。',
      map: 'Gijang Market Busan'
    },
    {
      key: 'diart', group: 'dining', level: '不接受訂位',
      name: 'DIART COFFEE 蜂蜜奶油麵包', en: 'DIART Coffee',
      day: '10/5（一）11:30', when: '靠早到，不用訂',
      desc: '招牌土耳其蜂蜜奶油麵包下午常售完，只能提早去。行程排在午前是刻意的，別把海雲台散步拖太久。',
      map: 'DIART Coffee Cheongsapo Busan'
    },
    {
      key: 'flights', group: 'confirm', level: '已開票',
      name: '航班 BX794 / BX791', en: 'Busan Air',
      day: '10/2 去程・10/7 回程', when: '出發前 1 週',
      desc: '確認選位、行李額度與是否要加購托運。廉航行李規定較嚴，回程伴手禮重量要先估。'
    },
    {
      key: 'stay-seomyeon', group: 'confirm', level: '已訂房',
      name: 'Gem Stay Seomyeon（2 晚）', en: 'Seomyeon',
      day: '10/2–10/4', when: '出發前 1 週',
      desc: '確認訂單、入住 16:00 後／退房 09:00–11:00，以及 10/4 早上寄放行李或叫車的安排。',
      map: 'Gem Stay Seomyeon Busan'
    },
    {
      key: 'stay-gwangalli', group: 'confirm', level: '已訂房',
      name: '光州里1號酒店（3 晚）', en: 'Hotel 1 Gwangalli',
      day: '10/4–10/7', when: '出發前 1 週',
      desc: '重點是先跟飯店確認「10/4 中午可否提早寄放行李」，換宿日才能空手去影島。退房 06:00–11:00。',
      map: 'Hotel 1 Gwangalli Busan'
    }
  ],
  bookingGroups: [
    { id: 'online', title: '需提前線上訂', note: '容易額滿或現場排隊久，出發前就處理完。' },
    { id: 'dining', title: '餐飲類', note: '不一定要訂，但要先決定策略與預算。' },
    { id: 'confirm', title: '已訂・出發前再確認一次', note: '訂單存離線截圖，並確認行李與寄放細節。' }
  ],
  bookingFree: '免預約：甘川洞文化村、南浦洞市場群、海東龍宮寺、清沙埔燈塔與展望台、廣安里無人機秀（免費，但 10/3 場次時間要看當天公告）。雨天備案的國際市場、樂天百貨光復店、西面地下街也都免預約；只有備案中的樂天世界釜山若真的要去，線上票較便宜。',

  prepGroups: [
    {
      id: 'docs', title: '證件與入境文件', when: '出發前 2–4 週',
      items: [
        { key: 'passport', text: '護照效期需 6 個月以上（10/7 回程 → 至少到 2027/04 之後仍有效）。' },
        { key: 'keta', text: 'K-ETA：台灣旅客的免申請措施有期限且逐年調整，請上官網確認 2026 年 10 月的最新狀態，不要沿用舊資訊。', link: { label: 'K-ETA 官網', url: 'https://www.k-eta.go.kr' } },
        { key: 'earrival', text: 'e-Arrival Card 電子入境卡：可在出發前 3 天內線上填，省下機上寫紙卡的時間。', link: { label: 'e-Arrival Card', url: 'https://www.e-arrivalcard.go.kr' } },
        { key: 'insurance', text: '旅平險 ＋ 不便險（廉航行李延誤、班機異動風險）。' },
        { key: 'offline-docs', text: '護照、機票、訂房、保單全部截圖存手機離線相簿。' }
      ]
    },
    {
      id: 'money', title: '金錢與支付', when: '出發前 1–2 週',
      items: [
        { key: 'krw-cash', text: '先換一部分韓元現金：市場小吃、烤貝店、機張雪蟹常偏好現金。' },
        { key: 'card', text: '準備一張免海外手續費的信用卡，並開通海外交易與確認額度。' },
        { key: 'transit-card', text: 'T-money 或 Cashbee：抵達金海機場先買或加值（10/2 行程已排）。' },
        { key: 'tax-refund', text: '了解退稅門檻與機場退稅流程，10/7 上機前要處理完。' }
      ]
    },
    {
      id: 'phone', title: '手機與 App（出發前裝好並登入）', when: '出發前 1 週',
      items: [
        { key: 'esim', text: '購買 eSIM 或 WiFi 分享器，並確認開通時間與流量。' },
        { key: 'naver', text: '裝 Naver Map：韓國路線導航主力，Google Maps 在韓國導航不完整。' },
        { key: 'kakaot', text: '裝 Kakao T 並先在台灣完成註冊與綁卡；行程多段建議叫車，落地才不用現場處理手機驗證。' },
        { key: 'papago', text: '裝 Papago 翻譯；點菜、問路、雪蟹確認價格都會用到。' },
        { key: 'addresses', text: '兩間住宿的英文／韓文地址存離線筆記，叫車時直接給司機看。' }
      ]
    },
    {
      id: 'pack', title: '行李重點（對照本行程的特殊需求）', when: '出發前 2–3 天',
      items: [
        { key: 'shoes', text: '好走的鞋：甘川洞（10/3）坡道多、海東龍宮寺（10/6）階梯多、Luge 需要包鞋。' },
        { key: 'jacket', text: '10 月釜山早晚偏涼、海邊風大 → 薄外套或防風外套。' },
        { key: 'rain', text: '雨具：行程有三天備了雨天方案，摺傘或輕便雨衣必備。' },
        { key: 'powerbank', text: '行動電源放隨身不可托運；膠囊列車與海岸列車拍照很耗電。' },
        { key: 'plug', text: '韓國 220V／圓孔 C 型插座 → 帶轉接頭。' },
        { key: 'spa', text: 'Spa Land：帶個人保養品與髮圈即可，毛巾與汗蒸服現場提供。' },
        { key: 'luge-wear', text: 'Luge 當天穿長褲、包鞋、把頭髮綁起來，別穿裙子或涼鞋。' },
        { key: 'liquid', text: '回程泡菜、醬料、液體類伴手禮一律托運。' }
      ]
    },
    {
      id: 'dayminus1', title: '出發前一天要查的即時資訊', when: '10/1（四）',
      items: [
        { key: 'cable-status', text: '松島纜車與 Sky Capsule 營運狀態（強風會停駛）。', link: { label: 'Blue Line Park', url: 'https://www.bluelinepark.com/' } },
        { key: 'drone-show', text: '廣安里 10/3 無人機秀當日場次公告（常見 19:00、21:00）。' },
        { key: 'luge-hours', text: 'Skyline Luge 最後售票時間（會早於關門），別把機張日排太晚。', link: { label: '官方公告', url: 'https://busan.skylineluge.kr/en/' } },
        { key: 'museum', text: '釜山市立美術館是否開放（10/5 雨天備案要用）。', link: { label: '美術館公告', url: 'https://art.busan.go.kr/eng/index.nm' } },
        { key: 'weather', text: '看一次 6 天天氣，決定 10/3 與 10/5 走主方案還是雨天備案。' }
      ]
    }
  ],

  foodFeatured: [
    { name: 'DIART COFFEE 土耳其蜂蜜奶油麵包', desc: '清沙埔人氣甜點，Kaymak 風格奶油配蜂蜜與麵包，已排入 10/5 中午。', map: 'DIART Coffee Cheongsapo Busan' },
    { name: '清沙埔烤貝', desc: '海線日最順的晚餐，兩人一份套餐通常很夠，點餐前先確認份量與價格。', map: 'Cheongsapo Grilled Shellfish Street Busan' },
    { name: 'BIFF 堅果糖餅', desc: '南浦洞代表小吃，外脆內甜，排隊快、旅行感很強。', map: 'BIFF Square Busan' },
    { name: '機張雪蟹', desc: '想吃大餐可排 10/6 機張市場；時價制，先講清楚總價。', map: 'Gijang Market Busan' },
    { name: '西面豬肉湯飯', desc: '抵達日最適合的熱湯晚餐，西面有多間老店可選。', map: 'Seomyeon Dwaeji Gukbap Street Busan' }
  ],
  foodClassic: [
    { name: '密麵 밀면', desc: '釜山代表冷麵，小麥麵條配冰涼湯底，海雲台或西面都好找。', map: 'Haeundae Milmyeon Busan' },
    { name: '魚板 어묵', desc: '三進魚板或市場魚板都適合當小吃與伴手禮。', map: 'Samjin Amook Busan Station' },
    { name: '海雲台鱈魚湯 대구탕', desc: '海雲台早午餐好選擇，清爽暖胃。', map: 'Haeundae Daegutang Busan' },
    { name: '札嘎其生魚片', desc: '市場一樓挑海鮮、二樓料理，適合想體驗傳統市場的人。', map: 'Jagalchi Market Busan' }
  ],
  pocketRain: [
    { name: '新世界 Centum City', desc: '百貨、超市、書店、美食街、Spa Land 集中，雨天最穩。', map: 'Shinsegae Centum City Busan', links: [{ label: '百貨資訊', url: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=94755' }, { label: 'Spa Land', url: 'https://www.shinsegae.com/store/entertainment/centum-spaland.do?storeCd=SC00008' }] },
    { name: 'ARTE MUSEUM 釜山', desc: '沉浸式室內展覽，適合替換任何一段戶外海景。', map: 'Arte Museum Busan', book: { label: '展覽票價', url: 'https://artemuseum.com/busan' } },
    { name: '樂天百貨光復店', desc: '南浦洞雨天採買點，頂樓展望台天氣好時可加碼。', map: 'Lotte Department Store Gwangbok Busan', book: { label: '營業資訊', url: 'https://global.lotteshopping.com/eng/store/main?cstrCd=0333' } },
    { name: '西面地下街', desc: '住西面前兩晚的備案，適合美妝、服飾與簡單晚餐。', map: 'Seomyeon Underground Shopping Center Busan', book: { label: '營業資訊', url: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=70895' } }
  ],
  pocketExtra: [
    { name: '太宗台', desc: '影島海崖公園與燈塔，若 10/4 體力好可替代白淺灘或加碼。', map: 'Taejongdae Busan', book: { label: '園區資訊', url: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=110962' } },
    { name: '釜山塔・龍頭山公園', desc: '南浦洞晚上加碼夜景，適合 10/3 市場後視體力決定。', map: 'Busan Tower', book: { label: '票價資訊', url: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=84864' } },
    { name: '松亭海水浴場', desc: 'Blue Line Park 沿線可停靠，時間多可從清沙埔延伸過去。', map: 'Songjeong Beach Busan', book: { label: '海灘資訊', url: 'https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000301001001000&uc_seq=280' } },
    { name: '梵魚寺', desc: '想加入山寺氣氛可替換半天，但此趟天數較短，列為備選。', map: 'Beomeosa Temple Busan', book: { label: '寺院資訊', url: 'https://www.beomeo.kr/eng/sub1.php' } }
  ]
};
