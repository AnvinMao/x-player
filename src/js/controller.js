import utils from './utils';
import Thumbnails from './thumbnails';
import Icons from './icons';

let cast;
let runOnce = true;
let isCasting = false;
let dragBar = false;

class Controller {
    constructor(player) {
        this.player = player;

        this.autoHideTimer = 0;
        this.setAutoHideHandler = this.setAutoHide.bind(this);

        this.player.on('play', this.setAutoHideHandler);
        this.player.on('pause', this.setAutoHideHandler);

        if (!utils.isMobile) {
            this.player.container.addEventListener('mousemove', this.setAutoHideHandler);
        }

        this.initPlayButton();
        this.initThumbnails();
        this.initPlayedBar();
        this.initFullButton();
        this.initScreenshotButton();
        this.initHighlights();
        this.initAirplayButton();
        this.initChromecastButton();
        if (!utils.isMobile) {
            this.initVolumeButton();
        }
    }

    initPlayButton() {
        this.player.template.playButton.addEventListener('click', () => {
            this.player.toggle();
        });

        this.player.template.mobilePlayButton.addEventListener('click', () => {
            this.player.toggle();
        });

        if (!utils.isMobile) {
            if (!this.player.options.preventClickToggle) {
                this.player.template.videoWrap.addEventListener('click', () => {
                    this.player.toggle();
                });
                this.player.template.controllerMask.addEventListener('click', () => {
                    this.player.toggle();
                });
            }
        } else {
            this.player.template.videoWrap.addEventListener('click', () => {
                this.toggle();
            });
            this.player.template.controllerMask.addEventListener('click', () => {
                this.toggle();
            });
        }
    }

    initHighlights() {
        this.player.on('durationchange', () => {
            if (this.player.video.duration !== 1 && this.player.video.duration !== Infinity) {
                if (this.player.options.highlight) {
                    const highlights = this.player.template.playedBarWrap.querySelectorAll('.xplayer-highlight');
                    [].slice.call(highlights, 0).forEach((item) => {
                        this.player.template.playedBarWrap.removeChild(item);
                    });
                    for (let i = 0; i < this.player.options.highlight.length; i++) {
                        if (!this.player.options.highlight[i].text || !this.player.options.highlight[i].time) {
                            continue;
                        }
                        const p = document.createElement('div');
                        p.classList.add('xplayer-highlight');
                        p.style.left = (this.player.options.highlight[i].time / this.player.video.duration) * 100 + '%';
                        p.innerHTML = '<span class="xplayer-highlight-text">' + this.player.options.highlight[i].text + '</span>';
                        this.player.template.playedBarWrap.insertBefore(p, this.player.template.playedBarTime);
                    }
                }
            }
        });
    }

    initThumbnails() {
        if (this.player.options.video.thumbnails) {
            this.thumbnails = new Thumbnails({
                container: this.player.template.barPreview,
                barWidth: this.player.template.barWrap.offsetWidth,
                events: this.player.events,
                ...this.player.options.video.thumbnails,
            });

            this.player.on('loadedmetadata', () => {
                this.thumbnails.resize(this.player.video.videoHeight / this.player.video.videoWidth, this.player.template.barWrap.offsetWidth);
            });
        }
    }

    initPlayedBar() {
        this.player.on('durationchange', () => {
            if (this.player.video.duration !== 1 && this.player.video.duration !== Infinity && dragBar) {
                this.player.seek(this.player.bar.get('played') * this.player.video.duration);
            }
        });

        const thumbMove = (e) => {
            let percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getBoundingClientRectViewLeft(this.player.template.playedBarWrap)) / this.player.template.playedBarWrap.clientWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.player.bar.set('played', percentage, 'width');
            this.player.template.ptime.innerHTML = utils.secondToTime(percentage * this.player.video.duration);
        };

        const thumbUp = (e) => {
            document.removeEventListener(utils.nameMap.dragEnd, thumbUp);
            document.removeEventListener(utils.nameMap.dragMove, thumbMove);
            let percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getBoundingClientRectViewLeft(this.player.template.playedBarWrap)) / this.player.template.playedBarWrap.clientWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.player.bar.set('played', percentage, 'width');
            if (this.player.video.duration) {
                this.player.seek(this.player.bar.get('played') * this.player.video.duration);
            } else {
                dragBar = true;
            }

            this.player.moveBar = false;
        };

        this.player.template.playedBarWrap.addEventListener(utils.nameMap.dragStart, () => {
            this.player.moveBar = true;
            document.addEventListener(utils.nameMap.dragMove, thumbMove);
            document.addEventListener(utils.nameMap.dragEnd, thumbUp);
        });

        this.player.template.playedBarWrap.addEventListener(utils.nameMap.dragMove, (e) => {
            if (this.player.video.duration) {
                const px = this.player.template.playedBarWrap.getBoundingClientRect().left;
                const tx = (e.clientX || e.changedTouches[0].clientX) - px;
                if (tx < 0 || tx > this.player.template.playedBarWrap.offsetWidth) {
                    return;
                }
                const time = this.player.video.duration * (tx / this.player.template.playedBarWrap.offsetWidth);
                if (utils.isMobile) {
                    this.thumbnails && this.thumbnails.show();
                }
                this.thumbnails && this.thumbnails.move(tx);
                this.player.template.playedBarTime.style.left = `${tx - 50}px`;
                this.player.template.playedBarTime.innerText = utils.secondToTime(time);
                this.player.template.playedBarTime.classList.remove('hidden');
            }
        });

        this.player.template.playedBarWrap.addEventListener(utils.nameMap.dragEnd, () => {
            if (utils.isMobile) {
                this.thumbnails && this.thumbnails.hide();
                this.player.template.playedBarTime.classList.add('hidden');
            }
        });

        if (!utils.isMobile) {
            this.player.template.playedBarWrap.addEventListener('mouseenter', () => {
                if (this.player.video.duration) {
                    this.thumbnails && this.thumbnails.show();
                    this.player.template.playedBarTime.classList.remove('hidden');
                }
            });

            this.player.template.playedBarWrap.addEventListener('mouseleave', () => {
                if (this.player.video.duration) {
                    this.thumbnails && this.thumbnails.hide();
                    this.player.template.playedBarTime.classList.add('hidden');
                }
            });
        }
    }

    initFullButton() {
        this.player.on('webfullscreen', () => {
            this.player.template.webFullButton.innerHTML = Icons.exitWebFull;
        });

        this.player.on('webfullscreen_cancel', () => {
            this.player.template.webFullButton.innerHTML = Icons.fullWeb;
        });

        this.player.on('fullscreen', () => {
            this.player.template.browserFullButton.innerHTML = Icons.exitFull;
        });

        this.player.on('fullscreen_cancel', () => {
            this.player.template.browserFullButton.innerHTML = Icons.full;
        });

        this.player.template.browserFullButton.addEventListener('click', () => {
            this.player.fullScreen.toggle('browser');
        });

        this.player.template.webFullButton.addEventListener('click', () => {
            this.player.fullScreen.toggle('web');
        });
    }

    initVolumeButton() {
        const vWidth = 35;

        const volumeMove = (event) => {
            const e = event || window.event;
            const percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getBoundingClientRectViewLeft(this.player.template.volumeBarWrap) - 5.5) / vWidth;
            this.player.volume(percentage);
        };
        const volumeUp = () => {
            document.removeEventListener(utils.nameMap.dragEnd, volumeUp);
            document.removeEventListener(utils.nameMap.dragMove, volumeMove);
            this.player.template.volumeButton.classList.remove('xplayer-volume-active');
        };

        this.player.template.volumeBarWrapWrap.addEventListener('click', (event) => {
            const e = event || window.event;
            const percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getBoundingClientRectViewLeft(this.player.template.volumeBarWrap) - 5.5) / vWidth;
            this.player.volume(percentage);
        });
        this.player.template.volumeBarWrapWrap.addEventListener(utils.nameMap.dragStart, () => {
            document.addEventListener(utils.nameMap.dragMove, volumeMove);
            document.addEventListener(utils.nameMap.dragEnd, volumeUp);
            this.player.template.volumeButton.classList.add('xplayer-volume-active');
        });
        this.player.template.volumeIcon.addEventListener('click', () => {
            if (this.player.video.muted) {
                this.player.video.muted = false;
                this.player.switchVolumeIcon();
                this.player.bar.set('volume', this.player.volume(), 'width');
            } else {
                this.player.video.muted = true;
                this.player.template.volumeIcon.innerHTML = Icons.volumeOff;
                this.player.bar.set('volume', 0, 'width');
            }
        });
    }

    initScreenshotButton() {
        if (this.player.options.screenshot) {
            this.player.template.camareButton.addEventListener('click', () => {
                const canvas = document.createElement('canvas');
                canvas.width = this.player.video.videoWidth;
                canvas.height = this.player.video.videoHeight;
                canvas.getContext('2d').drawImage(this.player.video, 0, 0, canvas.width, canvas.height);

                let dataURL;
                canvas.toBlob((blob) => {
                    dataURL = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = dataURL;
                    link.download = 'xplayer.png';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(dataURL);
                    this.player.events.trigger('screenshot', dataURL);
                });
            });
        }
    }

    initAirplayButton() {
        if (this.player.options.airplay) {
            if (window.WebKitPlaybackTargetAvailabilityEvent) {
                this.player.video.addEventListener(
                    'webkitplaybacktargetavailabilitychanged',
                    function (event) {
                        switch (event.availability) {
                            case 'available':
                                this.template.airplayButton.disable = false;
                                break;

                            default:
                                this.template.airplayButton.disable = true;
                        }

                        this.template.airplayButton.addEventListener(
                            'click',
                            function () {
                                this.video.webkitShowPlaybackTargetPicker();
                            }.bind(this)
                        );
                    }.bind(this.player)
                );
            } else {
                this.player.template.airplayButton.style.display = 'none';
            }
        }
    }

    initChromecast() {
        const script = window.document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1');
        window.document.body.appendChild(script);

        window.__onGCastApiAvailable = (isAvailable) => {
            if (isAvailable && window.chrome.cast) {
                cast = window.chrome.cast;
                const sessionRequest = new cast.SessionRequest(cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
                const apiConfig = new cast.ApiConfig(
                    sessionRequest,
                    () => {},
                    (status) => {
                        if (status === cast.ReceiverAvailability.AVAILABLE) {
                            console.log('chromecast: ', status);
                        }
                    }
                );
                cast.initialize(apiConfig, () => {});
            }
        };
    }

    initChromecastButton() {
        if (this.player.options.chromecast) {
            if (runOnce) {
                runOnce = false;
                this.initChromecast();
            }
            const discoverDevices = () => {
                cast.requestSession(
                    (s) => {
                        this.session = s;
                        launchMedia(this.player.options.video.url);
                    },
                    (err) => {
                        if (err.code === 'cancel') {
                            this.session = undefined;
                        } else {
                            console.error('Error selecting a cast device', err);
                        }
                    }
                );
            };

            const launchMedia = (media) => {
                const mediaInfo = new cast.media.MediaInfo(media);
                const request = new cast.media.LoadRequest(mediaInfo);

                if (!this.session) {
                    window.open(media);
                    return false;
                }
                this.session.loadMedia(request, onMediaDiscovered.bind(this, 'loadMedia'), onMediaError).play();
                return true;
            };

            const onMediaDiscovered = (how, media) => {
                this.currentMedia = media;
            };

            const onMediaError = (err) => {
                console.error('Error launching media', err);
            };

            this.player.template.chromecastButton.addEventListener('click', () => {
                if (isCasting) {
                    isCasting = false;
                    this.currentMedia.stop();
                    this.session.stop();
                    this.initChromecast();
                } else {
                    isCasting = true;
                    discoverDevices();
                }
            });
        }
    }

    setAutoHide() {
        this.show();
        clearTimeout(this.autoHideTimer);
        this.autoHideTimer = setTimeout(() => {
            if (this.player.video.played.length && !this.player.paused && !this.disableAutoHide) {
                this.hide();
            }
        }, 3000);
    }

    show() {
        this.player.container.classList.remove('xplayer-hide-controller');
    }

    hide() {
        this.player.container.classList.add('xplayer-hide-controller');
        this.player.setting.hide();
    }

    isShow() {
        return !this.player.container.classList.contains('xplayer-hide-controller');
    }

    toggle() {
        if (this.isShow()) {
            this.hide();
        } else {
            this.show();
        }
    }

    destroy() {
        if (!utils.isMobile) {
            this.player.container.removeEventListener('mousemove', this.setAutoHideHandler);
        }
        clearTimeout(this.autoHideTimer);
    }
}

export default Controller;
