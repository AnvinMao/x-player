/*
W3C def language codes is :
    language-code = primary-code ( "-" subcode )
        primary-code    ISO 639-1   ( the names of language with 2 code )
        subcode         ISO 3166    ( the names of countries )

NOTE: use lowercase to prevent case typo from user!
Use this as shown below..... */

function i18n(lang) {
    this.lang = lang;
    // in case someone says en-us, and en is present!
    this.fallbackLang = this.lang.includes('-') ? this.lang.split('-')[0] : this.lang;
    this.tran = (key) => {
        key = key.toLowerCase();
        if (tranTxt[this.lang] && tranTxt[this.lang][key]) {
            return tranTxt[this.lang][key];
        } else if (tranTxt[this.fallbackLang] && tranTxt[this.fallbackLang][key]) {
            return tranTxt[this.fallbackLang][key];
        } else if (standard[key]) {
            return standard[key];
        } else {
            return key;
        }
    };
}

// Standard english translations
const standard = {
    top: 'Top',
    bottom: 'Bottom',
    speed: 'Playback Speed',
    normal: 'Normal',
    quality: 'Quality',
    loop: 'Loop',
    'video-failed': 'Video load failed',
    'switching-quality': 'Switching to %q quality',
    'switched-quality': 'Switched to %q quality',
    setting: 'Setting',
    fullscreen: 'Full screen',
    'web-fullscreen': 'Web full screen',
    screenshot: 'Screenshot',
    airplay: 'AirPlay',
    chromecast: 'ChromeCast',
    off: 'Off',
    volume: 'Volume',
    live: 'Live',
    'video-info': 'Video info',
};

// add translation text here
const tranTxt = {
    en: standard,
    'zh-cn': {
        top: '顶部',
        bottom: '底部',
        speed: '播放速度',
        normal: '正常',
        quality: '画质',
        loop: '循环播放',
        'video-failed': '视频加载失败',
        'switching-quality': '正在切换至 %q 画质',
        'switched-quality': '已经切换至 %q 画质',
        setting: '设置',
        fullscreen: '全屏',
        'web-fullscreen': '页面全屏',
        screenshot: '截图',
        airplay: '无线投屏',
        chromecast: 'ChromeCast',
        off: '关闭',
        volume: '音量',
        live: '直播',
        'video-info': '视频统计信息',
    },
    'zh-tw': {
        top: '頂部',
        bottom: '底部',
        speed: '播放速度',
        normal: '正常',
        quality: '畫質',
        loop: '循環播放',
        'video-failed': '影片載入失敗',
        'switching-quality': '正在切換至 %q 畫質',
        'switched-quality': '已經切換至 %q 畫質',
        setting: '設定',
        fullscreen: '全螢幕',
        'web-fullscreen': '頁面全螢幕',
        screenshot: '截圖',
        airplay: '無線投屏',
        chromecast: 'ChromeCast',
        off: '關閉',
        volume: '音量',
        live: '直播',
        'video-info': '影片統計訊息',
    },
    'ko-kr': {
        top: '맨 위',
        bottom: '맨 아래',
        speed: '재생 속도',
        normal: '표준',
        quality: '화질',
        loop: '루프 재생',
        'video-failed': '비디오를 불러오지 못했습니다.',
        'switching-quality': '전환 %q 화질',
        'switched-quality': '전환 됨 %q 화질',
        setting: '설정',
        fullscreen: '전체 화면',
        'web-fullscreen': '웹 내 전체화면',
        screenshot: '화면 캡쳐',
        airplay: '에어플레이',
        chromecast: 'ChromeCast',
        off: '끄다',
        Volume: '볼륨',
        live: '생방송',
        'video-info': '비디오 정보',
    },
    de: {
        top: 'Oben',
        bottom: 'Unten',
        speed: 'Geschwindigkeit',
        normal: 'Normal',
        quality: 'Bildqualität',
        loop: 'Loop-Wiedergabe',
        'video-failed': 'Das Video konnte nicht geladen werden',
        'switching-quality': 'Wechsle zur %q Qualität',
        'switched-quality': 'Zur %q Qualität gewechselt',
        setting: 'Einstellungen',
        fullscreen: 'Vollbild',
        'web-fullscreen': 'Browser Vollbild',
        screenshot: 'Screenshot',
        airplay: 'AirPlay',
        chromecast: 'ChromeCast',
        off: 'Schließung',
        volume: 'Lautstärke',
        live: 'Live',
        'video-info': 'Video Info',
    },
    ja: {
        top: 'トップ',
        bottom: 'ボトム',
        speed: '再生速度',
        normal: '通常',
        quality: '画質',
        loop: 'ループプレイ',
        'video-failed': 'ビデオの読み込みに失敗',
        'switching-quality': '%qへ切り替え中',
        'switched-quality': '%qへ切り替え完了',
        setting: '設定',
        fullscreen: '全画面表示',
        'web-fullscreen': 'ブラウザ全体表示',
        screenshot: '画面コピー',
        airplay: 'AirPlay',
        chromecast: 'ChromeCast',
        off: 'OFF',
        volume: '音量',
        live: 'ライブ',
        'video-info': '動画情報',
    },
    ru: {
        top: 'Вверху',
        bottom: 'Внизу',
        speed: 'Скорость',
        normal: 'Обычный',
        quality: 'качество',
        loop: 'петля',
        'video-failed': 'Ошибка загрузки видео',
        'switching-quality': 'Переключение качества на: %q',
        'switched-quality': 'Установлено качество: %q',
        setting: 'Настройки',
        fullscreen: 'На весь экран',
        'web-fullscreen': 'На весь Web экран',
        screenshot: 'Скриншот',
        airplay: 'AirPlay',
        chromecast: 'ChromeCast',
        off: 'Выкл',
        volume: 'Громкость',
        live: 'Живые комментарии',
        'video-info': 'Информация о видео',
    },
};

export { i18n };
