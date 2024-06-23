import utils from './utils';

class Setting {
    constructor(player, tran) {
        this.player = player;
        this.tran = tran;

        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });
        this.player.template.settingButton.addEventListener('click', () => {
            this.show();
        });

        this.player.template.settingBack.addEventListener('click', () => {
            this.player.template.settingBox.className = 'xplayer-setting-box xplayer-setting-box-open';
        });

        this.loop = this.player.options.loop;
        this.loopToogle = this.player.template.loop.firstElementChild;
        this.loopToogle.checked = this.loop;
        this.player.template.loop.addEventListener('click', () => {
            this.loop = !this.loop;
            this.loopToogle.checked = this.loop;
        });

        let narrowPanel;
        let narrowPanelClass;
        for (let i = 0; i < this.player.template.settingItems.length; i++) {
            const node = this.player.template.settingItems[i];
            node.addEventListener('click', () => {
                if (node.dataset.narrow) {
                    narrowPanelClass = `xplayer-setting-narrow-${node.dataset.narrow}`;
                    narrowPanel = node;
                    this.player.template.settingBox.classList.add(narrowPanelClass);
                } else if (narrowPanel) {
                    this.player.template.settingBox.classList.remove(narrowPanelClass);
                    if (node.dataset.speed) {
                        const speed = Number(node.dataset.speed);
                        this.player.speed(speed);
                        narrowPanel.children[1].innerText = speed === 1 ? tran('normal') : speed;
                    } else if (node.dataset.quality) {
                        this.player.switchQuality(node.dataset.quality);
                        narrowPanel.children[1].innerText = this.player.quality.name;
                    }
                }
            });
        }
    }

    hide() {
        this.player.template.settingBox.className = 'xplayer-setting-box';
        this.player.template.mask.classList.remove('xplayer-mask-show', 'xplayer-setting-mask');
        this.player.template.settingButton.classList.remove('xplayer-setting-active');
        this.player.controller.disableAutoHide = false;
        document.body.classList.remove('xplayer-fixed');
    }

    show() {
        this.player.template.settingBox.classList.add('xplayer-setting-box-open');
        this.player.template.mask.classList.add('xplayer-mask-show', 'xplayer-setting-mask');
        this.player.template.settingButton.classList.add('xplayer-setting-active');
        this.player.controller.disableAutoHide = true;
        if (utils.isMobile) {
            document.body.classList.add('xplayer-fixed');
        }
    }
}

export default Setting;
