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
      dayTips: ['第一晚先建立集合規則：每天出門前確認錢包、交通卡、護照影本、行動電源。', '西面站出口多，約集合點時要講清楚出口號碼或店名。']
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
        { time: '10:30', name: '國際市場・富平罐頭市場', en: 'Gukje / Bupyeong Market', desc: '多數區域有遮雨，適合小吃、伴手禮、雜貨採買。', price: '自由消費', duration: '2.5 小時', map: 'Gukje Market Busan' },
        { time: '14:00', name: '樂天百貨光復店', en: 'Lotte Department Store Gwangbok', desc: '百貨、超市、展望台都集中在同一棟；雨天很穩。', price: '自由消費', duration: '2 小時', map: 'Lotte Department Store Gwangbok Busan' },
        { time: '17:00', name: '西面地下街', en: 'Seomyeon Underground Shopping', desc: '回西面逛地下街、吃晚餐，晚上早點休息。', duration: '2 小時', map: 'Seomyeon Underground Shopping Center Busan' }
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
        { time: '10:30', name: '海雲台市場', en: 'Haeundae Traditional Market', desc: '吃鱈魚湯、辣炒年糕、魚板，雨天也能快速補餐。', price: '₩5,000 起', duration: '1.5 小時', map: 'Haeundae Traditional Market Busan' },
        { time: '13:00', name: '釜山市立美術館或 Shinsegae', en: 'Busan Museum of Art / Shinsegae', desc: '海線天候太差就移到室內，Centum City 交通最方便。', duration: '2-3 小時', map: 'Busan Museum of Art' },
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
        { time: '10:30', name: '樂天 Premium Outlet 東釜山', en: 'Lotte Premium Outlets', desc: '有室內商店與餐飲，雨天比戶外 Luge 穩。', duration: '3 小時', map: 'Lotte Premium Outlets Dongbusan' },
        { time: '14:30', name: '樂天世界釜山', en: 'Lotte World Adventure Busan', desc: '若同行者想玩樂園，可改以樂園為主；不玩的人繼續 Outlet。', price: '依票種', duration: '3 小時', map: 'Lotte World Adventure Busan' },
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
    { name: '新世界 Centum City', desc: '百貨、超市、書店、美食街、Spa Land 集中，雨天最穩。', map: 'Shinsegae Centum City Busan' },
    { name: 'ARTE MUSEUM 釜山', desc: '沉浸式室內展覽，適合替換任何一段戶外海景。', map: 'Arte Museum Busan' },
    { name: '樂天百貨光復店', desc: '南浦洞雨天採買點，頂樓展望台天氣好時可加碼。', map: 'Lotte Department Store Gwangbok Busan' },
    { name: '西面地下街', desc: '住西面前兩晚的備案，適合美妝、服飾與簡單晚餐。', map: 'Seomyeon Underground Shopping Center Busan' }
  ],
  pocketExtra: [
    { name: '太宗台', desc: '影島海崖公園與燈塔，若 10/4 體力好可替代白淺灘或加碼。', map: 'Taejongdae Busan' },
    { name: '釜山塔・龍頭山公園', desc: '南浦洞晚上加碼夜景，適合 10/3 市場後視體力決定。', map: 'Busan Tower' },
    { name: '松亭海水浴場', desc: 'Blue Line Park 沿線可停靠，時間多可從清沙埔延伸過去。', map: 'Songjeong Beach Busan' },
    { name: '梵魚寺', desc: '想加入山寺氣氛可替換半天，但此趟天數較短，列為備選。', map: 'Beomeosa Temple Busan' }
  ]
};
