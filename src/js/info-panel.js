/* global XPLAYER_VERSION GIT_HASH */

class InfoPanel {
    constructor(player) {
        this.container = player.template.infoPanel;
        this.template = player.template;
        this.video = player.video;
        this.player = player;

        this.template.infoPanelClose.addEventListener('click', () => {
            this.hide();
        });
    }

    show() {
        this.init();
        this.beginTime = Date.now();
        this.update();
        this.player.timer.enable('info');
        this.player.timer.enable('fps');
        this.container.classList.remove('xplayer-info-panel-hide');
    }

    hide() {
        this.player.timer.disable('info');
        this.player.timer.disable('fps');
        this.container.classList.add('xplayer-info-panel-hide');
    }

    triggle() {
        if (this.container.classList.contains('xplayer-info-panel-hide')) {
            this.show();
        } else {
            this.hide();
        }
    }

    update() {
        this.infoVersion.innerHTML = `v${XPLAYER_VERSION} ${GIT_HASH}`;
        this.infoType.innerHTML = this.player.type;
        this.infoViewport.innerHTML = `${this.player.video.clientWidth} x ${this.player.video.clientHeight} / ${this.player.video.videoWidth} x ${this.player.video.videoHeight}`;
        this.infoDuration.innerHTML = this.player.video.duration || 0;
        this.infoDate.innerHTML = new Date();
        this.infoVolume.innerHTML = `${Math.floor(this.player.video.volume * 100)}%`;
    }

    fps(value) {
        this.infoFPS.innerHTML = `${value.toFixed(1)}`;
    }

    init() {
        this.template.infoList.innerHTML = '';
        this.infoVersion = this.#createItem('Player Version');
        this.infoFPS = this.#createItem('FPS');
        this.infoType = this.#createItem('Video Type');
        this.infoViewport = this.#createItem('Viewport / Resolution');
        this.infoDuration = this.#createItem('Video Duration');
        this.infoVolume = this.#createItem('Volume');
        this.infoDate = this.#createItem('Date');
    }

    #createItem(itemName) {
        const item = document.createElement('div');
        item.classList.add('xplayer-info-panel-item');
        const title = document.createElement('span');
        title.innerText = itemName;
        item.appendChild(title);
        const data = document.createElement('span');
        item.appendChild(data);
        this.template.infoList.appendChild(item);
        return data;
    }
}

export default InfoPanel;
