class Bezel {
    constructor(container) {
        this.container = container;

        this.container.addEventListener('animationend', () => {
            this.container.classList.remove('xplayer-bezel-transition');
        });
    }

    switch(icon) {
        this.container.innerHTML = icon;
        this.container.classList.add('xplayer-bezel-transition');
    }
}

export default Bezel;
