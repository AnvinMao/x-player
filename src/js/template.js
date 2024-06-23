import Icons from './icons';
import tplPlayer from '../template/player.art';
import utils from './utils';

class Template {
    constructor(options) {
        this.container = options.container;
        this.options = options.options;
        this.index = options.index;
        this.tran = options.tran;
        this.init();
    }

    init() {
        this.container.innerHTML = tplPlayer({
            options: this.options,
            index: this.index,
            tran: this.tran,
            icons: Icons,
            mobile: utils.isMobile,
            video: {
                temp: false,
                poster: this.options.video.poster,
                screenshot: this.options.screenshot,
                airplay: utils.isSafari && !utils.isChrome ? this.options.airplay : false,
                chromecast: this.options.chromecast,
                preload: this.options.preload,
                url: this.options.video.url,
            },
        });

        this.volumeBar = this.#select('.xplayer-volume-bar-inner');
        this.volumeBarWrap = this.#select('.xplayer-volume-bar');
        this.volumeBarWrapWrap = this.#select('.xplayer-volume-bar-wrap');
        this.volumeButton = this.#select('.xplayer-volume');
        this.volumeIcon = this.#select('.xplayer-volume-icon');
        this.playedBar = this.#select('.xplayer-played');
        this.loadedBar = this.#select('.xplayer-loaded');
        this.playedBarWrap = this.#select('.xplayer-bar-wrap');
        this.playedBarTime = this.#select('.xplayer-bar-time');
        this.bezel = this.#select('.xplayer-bezel-icon');
        this.playButton = this.#select('.xplayer-play-icon');
        this.mobilePlayButton = this.#select('.xplayer-mobile-play');
        this.videoWrap = this.#select('.xplayer-video-wrap');
        this.video = this.#select('.xplayer-video');
        this.controllerMask = this.#select('.xplayer-controller-mask');
        this.ptime = this.#select('.xplayer-ptime');
        this.settingButton = this.#select('.xplayer-setting-icon');
        this.settingBox = this.#select('.xplayer-setting-box');
        this.settingItems = this.#select('.xplayer-setting-item', true);
        this.settingBack = this.#select('.xplayer-setting-back');
        this.loop = this.#select('.xplayer-toggle-loop');
        this.mask = this.#select('.xplayer-mask');
        this.dtime = this.#select('.xplayer-dtime');
        this.controller = this.#select('.xplayer-controller');
        this.browserFullButton = this.#select('.xplayer-full-icon');
        this.webFullButton = this.#select('.xplayer-full-in-icon');
        this.menu = this.#select('.xplayer-menu');
        this.menuItem = this.#select('.xplayer-menu-item', true);
        this.camareButton = this.#select('.xplayer-camera-icon');
        this.airplayButton = this.#select('.xplayer-airplay-icon');
        this.chromecastButton = this.#select('.xplayer-chromecast-icon');
        this.barPreview = this.#select('.xplayer-bar-preview');
        this.barWrap = this.#select('.xplayer-bar-wrap');
        this.noticeList = this.#select('.xplayer-notice-list');
        this.infoPanel = this.#select('.xplayer-info-panel');
        this.infoPanelClose = this.#select('.xplayer-info-panel-close');
        this.infoList = this.#select('.xplayer-info-list');
    }

    #select(el, all = false) {
        if (all) {
            return this.container.querySelectorAll(el);
        }

        return this.container.querySelector(el);
    }

    static NewNotice(text, opacity, id) {
        const notice = document.createElement('div');
        notice.classList.add('xplayer-notice');
        notice.style.opacity = opacity;
        notice.innerText = text;
        if (id) {
            notice.id = `xplayer-notice-${id}`;
        }
        return notice;
    }
}

export default Template;
