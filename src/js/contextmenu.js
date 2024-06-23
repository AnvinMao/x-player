class ContextMenu {
    constructor(player) {
        this.player = player;
        this.shown = false;

        Array.prototype.slice.call(this.player.template.menuItem).forEach((item, index) => {
            if (this.player.options.contextmenu[index].click) {
                item.addEventListener('click', () => {
                    this.player.options.contextmenu[index].click(this.player);
                    this.hide();
                });
            }
        });

        this.contextmenuHandler = (e) => {
            if (this.shown) {
                this.hide();
                return;
            }

            const event = e || window.event;
            event.preventDefault();

            const clientRect = this.player.container.getBoundingClientRect();
            this.show(event.clientX - clientRect.left, event.clientY - clientRect.top);

            this.player.template.mask.addEventListener('click', () => {
                this.hide();
            });
        };
        this.player.container.addEventListener('contextmenu', this.contextmenuHandler);
    }

    show(x, y) {
        const menu = this.player.template.menu;
        menu.classList.add('xplayer-menu-show');

        const clientRect = this.player.container.getBoundingClientRect();
        if (x + menu.offsetWidth >= clientRect.width) {
            menu.style.right = clientRect.width - x + 'px';
            menu.style.left = 'initial';
        } else {
            menu.style.left = x + 'px';
            menu.style.right = 'initial';
        }
        if (y + menu.offsetHeight >= clientRect.height) {
            menu.style.bottom = clientRect.height - y + 'px';
            menu.style.top = 'initial';
        } else {
            menu.style.top = y + 'px';
            menu.style.bottom = 'initial';
        }

        this.player.template.mask.classList.add('xplayer-mask-show');

        this.shown = true;
        this.player.events.trigger('contextmenu_show');
    }

    hide() {
        this.player.template.mask.classList.remove('xplayer-mask-show');
        this.player.template.menu.classList.remove('xplayer-menu-show');

        this.shown = false;
        this.player.events.trigger('contextmenu_hide');
    }

    destroy() {
        this.player.container.removeEventListener('contextmenu', this.contextmenuHandler);
    }
}

export default ContextMenu;
