const THUMBNAIL_WIDTH = 200;

class Thumbnails {
    constructor(options) {
        this.container = options.container;
        this.barWidth = options.barWidth;
        this.container.style.backgroundImage = `url('${options.url}')`;
        this.events = options.events;
        this.count = options.count || 100;
        this.container.style.backgroundSize = `${this.count * THUMBNAIL_WIDTH}px 100%`;
    }

    resize(aspectRatio, barWrapWidth) {
        const height = aspectRatio * THUMBNAIL_WIDTH;
        this.container.style.width = `${THUMBNAIL_WIDTH}px`;
        this.container.style.height = `${height}px`;
        this.container.style.top = `${-height - 25}px`;
        this.barWidth = barWrapWidth;
    }

    show() {
        this.container.style.display = 'block';
        this.events && this.events.trigger('thumbnails_show');
    }

    move(position) {
        this.container.style.backgroundPosition = `-${(Math.ceil((position / this.barWidth) * this.count) - 1) * THUMBNAIL_WIDTH}px 0`;
        this.container.style.left = `${Math.min(Math.max(position - this.container.offsetWidth / 2, 0), this.barWidth - THUMBNAIL_WIDTH - 4)}px`;
    }

    hide() {
        this.container.style.display = 'none';
        this.events && this.events.trigger('thumbnails_hide');
    }
}

export default Thumbnails;
