declare namespace XPlayer {

  export type PlayerEvent = 
    'abort' |
    'canplay' |
    'canplaythrough' |
    'durationchange' |
    'emptied' |
    'ended' |
    'error' |
    'loadeddata' |
    'loadedmetadata' |
    'loadstart' |
    'mozaudioavailable' |
    'pause' |
    'play' |
    'playing' |
    'progress' |
    'ratechange' |
    'seeked' |
    'seeking' |
    'stalled' |
    'suspend' |
    'timeupdate' |
    'volumechange' |
    'waiting' |
    'screenshot' |
    'thumbnails_show' |
    'thumbnails_hide' |
    'contextmenu_show' |
    'contextmenu_hide' |
    'notice_show' |
    'notice_hide' |
    'quality_start' |
    'quality_end' |
    'destroy' |
    'resize' |
    'fullscreen' |
    'fullscreen_cancel' |
    'webfullscreen' |
    'webfullscreen_cancel';

  export interface Quality {
    name: string;
    url: string;
    type?: string;
  }

  export interface ContextMenu {
    text: string;
    link?: string;
    click?(player: XPlayer): void;
  }

  export interface Video {
    url: string;
    poster?: string;
    thumbnails?: { url: string, count: number };
    quality?: Quality[];
    defaultQuality?: number;
    type?: string;
    customType?: Record<string, (player: XPlayer) => void>;
  }

  export interface Options {
    container: HTMLElement | string;
    live?: boolean;
    autoplay?: boolean;
    theme?: string;
    lang?: string;
    screenshot?: boolean;
    airplay?: boolean;
    chromecast?: boolean;
    loop?: boolean;
    hotkey?: boolean;
    preload?: 'metadata' | 'auto' | 'none';
    volume?: number;
    playbackSpeed?: number[];
    video: Video;
    highlight?: { time: number, text: string }[];
    contextmenu?: ContextMenu[];
    metex?: boolean;
    pluginOptions?: any;
    preventClickToggle?: boolean;
  }
}

declare class XPlayer {
  constructor(options: XPlayer.Options);

  static get version(): string;
  video: XPlayer.Video;

  play(): void;
  pause(): void;
  toggle(): void;
  destroy(): void;
  speed(rate: number): void;
  switchVideo(video: XPlayer.Video): void;
  notice(text: string, time: number, opacity: number, id: string): void;
  volume(percentage: string, nostorage: boolean): any;
  switchQuality(index: number): void;
  on(name: XPlayer.PlayerEvent, callback: Function): void;
}

declare module 'xplayer-core' {
  export default XPlayer;
}