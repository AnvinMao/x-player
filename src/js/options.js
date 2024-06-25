/* global XPLAYER_VERSION */

export default (options) => {
    // default options
    const defaultOption = {
        container: options.element || document.getElementsByClassName('xplayer')[0],
        live: false,
        autoplay: false,
        theme: '#FF0000',
        lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
        screenshot: false,
        airplay: true,
        chromecast: false,
        loop: false,
        hotkey: true,
        preload: 'metadata',
        volume: 0.7,
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
        video: {},
        contextmenu: [],
        mutex: true,
        pluginOptions: { hls: {}, flv: {}, dash: {}, webtorrent: {} },
        preventClickToggle: false,
    };
    
    options = { ...defaultOption, ...options };
    !options.video.type && (options.video.type = 'auto');

    if (options.video.quality) {
        options.video.url = options.video.quality[options.video.defaultQuality || 0].url;
    }

    if (options.lang) {
        options.lang = options.lang.toLowerCase();
    }

    options.contextmenu = options.contextmenu.concat([
        {
            key: 'video-info',
            click: (player) => {
                player.infoPanel.triggle();
            },
        },
    ]);

    return options;
};
