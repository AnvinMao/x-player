(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("XPlayer", [], factory);
	else if(typeof exports === 'object')
		exports["XPlayer"] = factory();
	else
		root["XPlayer"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 80:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $imports = __webpack_require__(643);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$blocks = arguments[1] || {}, include = function (content) {
            $$out += content;
            return $$out;
        }, video = $data.video, options = $data.options, $escape = $imports.$escape, icons = $data.icons, tran = $data.tran, $each = $imports.$each, $value = $data.$value, $index = $data.$index;
    $$out += '<div class="xplayer-mask"></div><div class="xplayer-video-wrap"> ';
    include(__webpack_require__(866)(video));
    $$out += ' ';
    if (options.logo) {
        $$out += ' <div class="xplayer-logo"><img src="';
        $$out += $escape(options.logo);
        $$out += '"></div> ';
    }
    $$out += ' <div class="xplayer-bezel"><span class="xplayer-bezel-icon"></span> <span class="xiplayer-loading-icon">';
    $$out += icons.loading;
    $$out += '</span></div></div><div class="xplayer-controller-mask"></div><div class="xplayer-controller"><div class="xplayer-bar-wrap"><div class="xplayer-bar-time hidden">00:00</div><div class="xplayer-bar-preview"></div><div class="xplayer-bar"><div class="xplayer-loaded" style="width:0"></div><div class="xplayer-played" style="width:0;background: ';
    $$out += $escape(options.theme);
    $$out += '"><span class="xplayer-thumb" style="background: ';
    $$out += $escape(options.theme);
    $$out += '"></span></div></div></div><div class="xplayer-icons"><div class="xplayer-icons-area"><button class="xplayer-icon xplayer-play-icon xplayer-mhide"> ';
    $$out += icons.play;
    $$out += ' </button><div class="xplayer-volume xplayer-mhide"><button class="xplayer-icon xplayer-volume-icon">{@ icons.volumeDown }}</button><div class="xplayer-volume-bar-wrap"><div class="xplayer-volume-bar"><div class="xplayer-volume-bar-inner"><span class="xplayer-thumb"></span></div></div></div></div><span class="xplayer-time"><span class="xplayer-ptime">0:00</span> / <span class="xplayer-dtime">0:00</span> </span> ';
    if (options.live) {
        $$out += ' <span class="xplayer-live-badge"><span style="background: ';
        $$out += $escape(options.theme);
        $$out += '"></span>';
        $$out += $escape(tran('live'));
        $$out += '</span> ';
    }
    $$out += ' </div><div class="xplayer-icons-area"> ';
    if (options.airplay) {
        $$out += ' <button class="xplayer-icon xplayer-airplay-icon xplayer-mhide"> ';
        $$out += icons.airplay;
        $$out += ' </button> ';
    }
    $$out += ' ';
    if (options.chromecast) {
        $$out += ' <button class="xplayer-icon xplayer-chromecast-icon xplayer-mhide"> ';
        $$out += icons.chromecast;
        $$out += ' </button> ';
    }
    $$out += ' ';
    if (options.screenshot) {
        $$out += ' <button class="xplayer-icon xplayer-camera-icon xplayer-mhide"> ';
        $$out += icons.camera;
        $$out += ' </button> ';
    }
    $$out += ' <div class="xplayer-setting"><button class="xplayer-icon xplayer-setting-icon"> ';
    $$out += icons.setting;
    $$out += ' </button><div class="xplayer-setting-box"><div class="xplayer-setting-origin-panel"><div class="xplayer-setting-toggle"><span class="xplayer-label">';
    $$out += $escape(tran('loop'));
    $$out += '</span><div class="xplayer-toggle xplayer-toggle-loop"><input class="xplayer-toggle-input" type="checkbox" name="xplayer-toggle"> <label for="xplayer-toggle" style="background: ';
    $$out += $escape(options.theme);
    $$out += '"></label></div></div><div class="xplayer-setting-item" data-narrow="speed"><span class="xplayer-label">';
    $$out += $escape(tran('speed'));
    $$out += '</span><span class="xplayer-setting-val"> ';
    $$out += $escape((options.video.playbackRate || 1) === 1 ? tran('normal') : options.video.playbackRate);
    $$out += ' </span><span>';
    $$out += icons.right;
    $$out += '</span></div> ';
    if (options.video.quality) {
        $$out += ' <div class="xplayer-setting-item" data-narrow="quality"><span class="xplayer-label">';
        $$out += $escape(tran('quality'));
        $$out += '</span><span class="xplayer-setting-val"> ';
        $$out += $escape(options.video.quality[options.video.defaultQuality].name);
        $$out += ' </span><span>';
        $$out += icons.right;
        $$out += '</span></div> ';
    }
    $$out += ' </div><div class="xplayer-setting-narrow-panel"><span class="xplayer-setting-back"> ';
    $$out += icons.right;
    $$out += ' </span><div class="xplayer-setting-speed"><div class="xplayer-narrow-title"> ';
    $$out += $escape(tran('speed'));
    $$out += ' </div> ';
    $each(options.playbackSpeed, function ($value, $index) {
        $$out += ' <div class="xplayer-setting-item" data-speed="';
        $$out += $escape($value);
        $$out += '"> ';
        $$out += $escape($value === 1 ? tran('normal') : $value);
        $$out += ' </div> ';
    });
    $$out += ' </div> ';
    if (options.video.quality) {
        $$out += ' <div class="xplayer-setting-quality"><div class="xplayer-narrow-title"> ';
        $$out += $escape(tran('quality'));
        $$out += ' </div> ';
        $each(options.video.quality, function ($value, $index) {
            $$out += ' <div class="xplayer-setting-item" data-quality="';
            $$out += $escape($index);
            $$out += '"> ';
            $$out += $escape($value.name);
            $$out += ' </div> ';
        });
        $$out += ' </div> ';
    }
    $$out += ' </div></div></div><button class="xplayer-icon xplayer-full-in-icon"> ';
    $$out += icons.fullWeb;
    $$out += ' </button> <button class="xplayer-icon xplayer-full-icon"> ';
    $$out += icons.full;
    $$out += ' </button></div></div></div><div class="xplayer-info-panel xplayer-info-panel-hide"><div class="xplayer-info-panel-close">\xD7</div><div class="xplayer-info-list"></div></div><div class="xplayer-menu"> ';
    $each(options.contextmenu, function ($value, $index) {
        $$out += ' <div class="xplayer-menu-item"><a ';
        if ($value.link) {
            $$out += ' target="_blank" ';
        }
        $$out += ' href="';
        $$out += $escape($value.link || 'javascript:void(0);');
        $$out += '">';
        if ($value.key) {
            $$out += ' ';
            $$out += $escape(tran($value.key));
        }
        if ($value.text) {
            $$out += $escape($value.text);
        }
        $$out += '</a></div> ';
    });
    $$out += ' </div><div class="xplayer-notice-list"></div><button class="xplayer-mobile-play"> ';
    $$out += icons.play;
    $$out += ' </button>';
    return $$out;
};

/***/ }),

/***/ 866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $imports = __webpack_require__(643);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', temp = $data.temp, airplay = $data.airplay, poster = $data.poster, $escape = $imports.$escape, screenshot = $data.screenshot, preload = $data.preload, url = $data.url;
    $$out += '<video class="xplayer-video ';
    if (temp) {
        $$out += 'xplayer-video-temp';
    }
    $$out += '" webkit-playsinline ';
    if (airplay) {
        $$out += ' x-webkit-airplay="allow" ';
    }
    $$out += ' playsinline ';
    if (poster) {
        $$out += ' poster="';
        $$out += $escape(poster);
        $$out += '" ';
    }
    $$out += ' ';
    if (screenshot) {
        $$out += ' crossorigin="anonymous" ';
    }
    $$out += ' ';
    if (preload) {
        $$out += ' preload="';
        $$out += $escape(preload);
        $$out += '" ';
    }
    $$out += ' ';
    if (airplay) {
        $$out += ' nosrc ';
    } else if (url) {
        $$out += ' src="';
        $$out += $escape(url);
        $$out += '" ';
    }
    $$out += ' > ';
    if (airplay) {
        $$out += ' <source src="';
        $$out += $escape(url);
        $$out += '"> ';
    }
    $$out += ' </video>';
    return $$out;
};

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M512 642.63495779l215.93252109 215.9325211H296.06747891l215.93252109-215.9325211zM835.89878164 174.49999998q29.52202412 0 50.60918497 21.08715997t21.08715995 50.60918495v431.86504219q0 30.36551045-21.08715995 51.45267129t-50.60918497 21.08715996H691.66260547v-72.53983125h144.23617617V246.1963449H188.10121836v431.86504219h144.23617617v72.53983125H188.10121836q-29.52202412 0-50.60918497-21.08715996t-21.08715995-51.45267129V246.1963449q0-29.52202412 21.08715995-50.60918495t50.60918497-21.08715997h647.79756328z\"></path></svg>"

/***/ }),

/***/ 631:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M590.75549317 165.93066406a49.43847656 49.43847656 0 0 1 43.85192871 26.62261963L672.18066406 264.80761719H833.35009766a74.15771484 74.15771484 0 0 1 74.15771484 74.15771484v444.94628906a74.15771484 74.15771484 0 0 1-74.15771484 74.15771485H190.64990234a74.15771484 74.15771484 0 0 1-74.15771484-74.15771485V338.96533203a74.15771484 74.15771484 0 0 1 74.15771484-74.15771484h185.88867188l37.57324219-72.2543335A49.43847656 49.43847656 0 0 1 457.96374511 165.93066406h132.79174806zM512 338.96533203a222.47314453 222.47314453 0 1 0 0 444.94628906 222.47314453 222.47314453 0 0 0 0-444.94628906z m0 74.15771484a148.31542969 148.31542969 0 1 1 0 296.63085938 148.31542969 148.31542969 0 0 1 0-296.63085938z\"></path><path d=\"M264.80761719 190.64990234h24.71923828a49.43847656 49.43847656 0 0 1 49.43847656 49.43847657H215.36914062a49.43847656 49.43847656 0 0 1 49.43847657-49.43847657z\"></path></svg>"

/***/ }),

/***/ 273:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M174.5 174.5h675a37.50000029 37.50000029 0 0 1 37.50000029 37.50000029v599.99999942a37.50000029 37.50000029 0 0 1-37.50000029 37.50000029h-225c0-25.12500029-1.9125-50.175-5.7375-74.99999971H811.99999971V249.49999971H212.00000029v118.2375A491.24999971 491.24999971 0 0 0 136.99999971 361.99999971V212.00000029a37.50000029 37.50000029 0 0 1 37.50000029-37.50000029z m375.00000029 675h-75.00000058a337.5 337.5 0 0 0-337.5-337.5v-74.99999971c227.8125 0 412.49999971 184.68749971 412.50000058 412.49999971z m-150.00000029 0H324.50000029a187.49999971 187.49999971 0 0 0-187.50000058-187.49999971v-75.00000058a262.50000029 262.50000029 0 0 1 262.50000029 262.50000029z m-150.00000029 0H136.99999971v-112.5a112.5 112.5 0 0 1 112.5 112.5z\"></path></svg>"

/***/ }),

/***/ 944:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M622.56915283 899.59765625h83.05664063V705.46141052H899.59765625v-83.05664063H622.56915283zM705.62579346 318.20117187V124.40234375h-83.05664063v276.85546875H899.59765625v-83.05664063zM318.37420654 318.20117187H124.40234375v83.05664063h277.02850342V124.40234375h-83.05664063zM124.40234375 705.46141052h193.97186279V899.59765625h83.05664063V622.4047699H124.40234375z\"></path></svg>"

/***/ }),

/***/ 95:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M888.67410714 754.74553572H135.32589286V269.25446428h753.34821428v485.49107144zM219.03125 671.04017857h585.9375V352.95982143H219.03125v318.08035714z\"></path></svg>"

/***/ }),

/***/ 928:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M887.29934697 828.04212354L136.69975391 828.04212354 136.69975391 195.95787646l750.59959306 0L887.29934697 828.04212354zM215.71028457 749.03159287l592.57853174 0L808.28881631 274.96840713 215.71028457 274.96840713 215.71028457 749.03159287z\"></path></svg>"

/***/ }),

/***/ 717:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M130.5546875 403.015625h81.73828125V212.29296875h190.89294434V130.5546875H130.5546875zM620.81408691 130.5546875v81.73828125H811.70703125v190.72265625h81.73828125V130.5546875zM811.70703125 811.70703125H620.81408691v81.73828125H893.4453125V620.65231323h-81.73828125zM212.29296875 620.65231323H130.5546875V893.4453125h272.63122559v-81.73828125H212.29296875z\"></path></svg>"

/***/ }),

/***/ 454:
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" viewBox=\"0 0 22 22\"><svg x=\"7\" y=\"1\"><circle class=\"xiplayer-loading-dot xiplayer-loading-dot-0\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"11\" y=\"3\"><circle class=\"xiplayer-loading-dot xiplayer-loading-dot-1\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"13\" y=\"7\"><circle class=\"xiplayer-loading-dot xiplayer-loading-dot-2\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"11\" y=\"11\"><circle class=\"xiplayer-loading-dot xiplayer-loading-dot-3\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"7\" y=\"13\"><circle class=\"xiplayer-loading-dot xiplayer-loading-dot-4\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"3\" y=\"11\"><circle class=\"xiplayer-loading-dot xiplayer-loading-dot-5\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"1\" y=\"7\"><circle class=\"xiplayer-loading-dot xiplayer-loading-dot-6\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"3\" y=\"3\"><circle class=\"xiplayer-loading-dot xiplayer-loading-dot-7\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg></svg>"

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M201.31081482 874.47071645h207.12612386V149.52928355h-207.12612386v724.9414329z m414.2522465-724.9414329v724.9414329h207.12612386V149.52928355h-207.12612386z\"></path></svg>"

/***/ }),

/***/ 416:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M236.63633869 137.44692634v749.10614732l588.58340165-374.55307366z\"></path></svg>"

/***/ }),

/***/ 460:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg>"

/***/ }),

/***/ 894:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M512 648.245q56.3037503 0 96.255-39.9512497t39.9512497-96.255-39.9512497-96.255-96.255-39.9512497-96.255 39.9512497-39.9512497 96.255 39.9512497 96.255 96.255 39.9512497zM800.8037503 550.13l81.72375 63.58875q12.7100003 9.0675 3.6425003 25.4199997l-78.12 134.4237503q-7.2849997 12.7100003-23.59875 7.2849997l-96.255-38.13q-38.13 27.2412503-65.40999969 38.13l-14.53125 101.71875q-3.6425003 16.3524997-18.17375031 16.35249969l-156.20124969 0q-14.53125 0-18.17375031-16.35249969l-14.53125-101.71875q-34.52625-14.53125-65.40999969-38.13l-96.255 38.13q-16.3524997 5.46375-23.59875-7.2849997l-78.12-134.4237503q-9.0675-16.3524997 3.6425003-25.4199997l81.72375-63.58875q-1.8212497-12.7100003-1.8212497-38.13t1.8212497-38.13l-81.72375-63.58875q-12.7100003-9.0675-3.6425003-25.4199997l78.12-134.4237503q7.2849997-12.7100003 23.59875-7.2849997l96.255 38.13q38.13-27.2412503 65.40999969-38.13l14.53125-101.71875q3.6425003-16.3524997 18.17375031-16.35249969l156.20124969 0q14.53125 0 18.17375031 16.35249969l14.53125 101.71875q34.52625 14.53125 65.40999969 38.13l96.255-38.13q16.3524997-5.46375 23.59875 7.2849997l78.12 134.4237503q9.0675 16.3524997-3.6425003 25.4199997l-81.72375 63.58875q1.8212497 12.7100003 1.8212497 38.13t-1.8212497 38.13z\"></path></svg>"

/***/ }),

/***/ 513:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M127.34933335 384l169.984 0 214.016-214.016 0 683.989333-214.016-214.016-169.984 0 0-256zM703.34933335 512q0 118.016-107.989333 171.989333l0-344.021333q107.989333 54.016 107.989333 171.989333z\"></path></svg>"

/***/ }),

/***/ 204:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M512 169.984l0 180.010667-89.984-89.984zM182.016 128l713.984 713.984-54.016 54.016-88.021333-88.021333q-73.984 57.984-155.989333 77.994667l0-88.021333q50.005333-13.994667 96-50.005333l-182.016-182.016 0 288-214.016-214.016-169.984 0 0-256 201.984 0-201.984-201.984zM809.984 512q0-102.016-59.008-180.010667t-153.002667-105.984l0-88.021333q130.005333 27.989333 214.016 132.992t84.010667 240.981333q0 96-43.989333 178.005333l-64-66.005333q22.016-54.016 22.016-112zM704 512q0 18.005333-2.005333 25.984l-104.021333-104.021333 0-93.994667q105.984 52.010667 105.984 171.989333z\"></path></svg>"

/***/ }),

/***/ 278:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M598.016 137.984q130.005333 27.989333 214.016 132.992t84.010667 240.981333-84.010667 240.981333-214.016 132.992l0-88.021333q93.994667-27.989333 153.002667-105.984t59.008-180.010667-59.008-180.010667-153.002667-105.984l0-88.021333zM704 512q0 120.021333-105.984 171.989333l0-344.021333q105.984 52.010667 105.984 171.989333zM128 384l169.984 0 214.016-214.016 0 683.989333-214.016-214.016-169.984 0 0-256z\"></path></svg>"

/***/ }),

/***/ 409:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};
var runtime = Object.create(globalThis);
var ESCAPE_REG = /["&'<>]/;
runtime.$escape = function (content) {
    return xmlEscape(toString(content));
};
runtime.$each = function (data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};
function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }
    return value;
}
function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }
    var result = '';
    var i = void 0, lastIndex = void 0, _char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
        switch (html.charCodeAt(i)) {
        case 34:
            _char = '&#34;';
            break;
        case 38:
            _char = '&#38;';
            break;
        case 39:
            _char = '&#39;';
            break;
        case 60:
            _char = '&#60;';
            break;
        case 62:
            _char = '&#62;';
            break;
        default:
            continue;
        }
        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }
        lastIndex = i + 1;
        result += _char;
    }
    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
}
module.exports = runtime;

/***/ }),

/***/ 643:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(409);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_0)
});

;// CONCATENATED MODULE: ./node_modules/promise-polyfill/src/finally.js
function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
        return constructor.resolve(callback()).then(function () {
            return value;
        });
    }, function (reason) {
        return constructor.resolve(callback()).then(function () {
            return constructor.reject(reason);
        });
    });
}
/* harmony default export */ const src_finally = (finallyConstructor);
;// CONCATENATED MODULE: ./node_modules/promise-polyfill/src/allSettled.js
function _typeof(o) {
    '@babel/helpers - typeof';
    return _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, _typeof(o);
}
function allSettled(arr) {
    var P = this;
    return new P(function (resolve, reject) {
        if (!(arr && typeof arr.length !== 'undefined')) {
            return reject(new TypeError(_typeof(arr) + ' ' + arr + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0)
            return resolve([]);
        var remaining = args.length;
        function res(i, val) {
            if (val && (_typeof(val) === 'object' || typeof val === 'function')) {
                var then = val.then;
                if (typeof then === 'function') {
                    then.call(val, function (val) {
                        res(i, val);
                    }, function (e) {
                        args[i] = {
                            status: 'rejected',
                            reason: e
                        };
                        if (--remaining === 0) {
                            resolve(args);
                        }
                    });
                    return;
                }
            }
            args[i] = {
                status: 'fulfilled',
                value: val
            };
            if (--remaining === 0) {
                resolve(args);
            }
        }
        for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    });
}
/* harmony default export */ const src_allSettled = (allSettled);
;// CONCATENATED MODULE: ./node_modules/promise-polyfill/src/any.js
function AggregateError(errors, message) {
    this.name = 'AggregateError', this.errors = errors;
    this.message = message || '';
}
AggregateError.prototype = Error.prototype;
function any(arr) {
    var P = this;
    return new P(function (resolve, reject) {
        if (!(arr && typeof arr.length !== 'undefined')) {
            return reject(new TypeError('Promise.any accepts an array'));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0)
            return reject();
        var rejectionReasons = [];
        for (var i = 0; i < args.length; i++) {
            try {
                P.resolve(args[i]).then(resolve)['catch'](function (error) {
                    rejectionReasons.push(error);
                    if (rejectionReasons.length === args.length) {
                        reject(new AggregateError(rejectionReasons, 'All promises were rejected'));
                    }
                });
            } catch (ex) {
                reject(ex);
            }
        }
    });
}
/* harmony default export */ const src_any = (any);
;// CONCATENATED MODULE: ./node_modules/promise-polyfill/src/index.js
function src_typeof(o) {
    '@babel/helpers - typeof';
    return src_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, src_typeof(o);
}



var setTimeoutFunc = setTimeout;
function isArray(x) {
    return Boolean(x && typeof x.length !== 'undefined');
}
function noop() {
}
function bind(fn, thisArg) {
    return function () {
        fn.apply(thisArg, arguments);
    };
}
function Promise(fn) {
    if (!(this instanceof Promise))
        throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function')
        throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    doResolve(fn, this);
}
function handle(self, deferred) {
    while (self._state === 3) {
        self = self._value;
    }
    if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
            (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
            return;
        }
        var ret;
        try {
            ret = cb(self._value);
        } catch (e) {
            reject(deferred.promise, e);
            return;
        }
        resolve(deferred.promise, ret);
    });
}
function resolve(self, newValue) {
    try {
        if (newValue === self)
            throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (src_typeof(newValue) === 'object' || typeof newValue === 'function')) {
            var then = newValue.then;
            if (newValue instanceof Promise) {
                self._state = 3;
                self._value = newValue;
                finale(self);
                return;
            } else if (typeof then === 'function') {
                doResolve(bind(then, newValue), self);
                return;
            }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
    } catch (e) {
        reject(self, e);
    }
}
function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
}
function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
        Promise._immediateFn(function () {
            if (!self._handled) {
                Promise._unhandledRejectionFn(self._value);
            }
        });
    }
    for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
}
function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
}
function doResolve(fn, self) {
    var done = false;
    try {
        fn(function (value) {
            if (done)
                return;
            done = true;
            resolve(self, value);
        }, function (reason) {
            if (done)
                return;
            done = true;
            reject(self, reason);
        });
    } catch (ex) {
        if (done)
            return;
        done = true;
        reject(self, ex);
    }
}
Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
};
Promise.prototype['finally'] = src_finally;
Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
        if (!isArray(arr)) {
            return reject(new TypeError('Promise.all accepts an array'));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0)
            return resolve([]);
        var remaining = args.length;
        function res(i, val) {
            try {
                if (val && (src_typeof(val) === 'object' || typeof val === 'function')) {
                    var then = val.then;
                    if (typeof then === 'function') {
                        then.call(val, function (val) {
                            res(i, val);
                        }, reject);
                        return;
                    }
                }
                args[i] = val;
                if (--remaining === 0) {
                    resolve(args);
                }
            } catch (ex) {
                reject(ex);
            }
        }
        for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    });
};
Promise.any = src_any;
Promise.allSettled = src_allSettled;
Promise.resolve = function (value) {
    if (value && src_typeof(value) === 'object' && value.constructor === Promise) {
        return value;
    }
    return new Promise(function (resolve) {
        resolve(value);
    });
};
Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
        reject(value);
    });
};
Promise.race = function (arr) {
    return new Promise(function (resolve, reject) {
        if (!isArray(arr)) {
            return reject(new TypeError('Promise.race accepts an array'));
        }
        for (var i = 0, len = arr.length; i < len; i++) {
            Promise.resolve(arr[i]).then(resolve, reject);
        }
    });
};
Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
    setImmediate(fn);
} || function (fn) {
    setTimeoutFunc(fn, 0);
};
Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
        console.warn('Possible Unhandled Promise Rejection:', err);
    }
};
/* harmony default export */ const src = (Promise);
;// CONCATENATED MODULE: ./src/js/utils.js
var isMobile = /mobile|android|iphone|ipod|phone|ipad/i.test(window.navigator.userAgent);
var utils = {
    secondToTime: function secondToTime(second) {
        second = second || 0;
        if (second === 0 || second === Infinity || second.toString() === 'NaN') {
            return '00:00';
        }
        var add0 = function add0(num) {
            return num < 10 ? '0' + num : '' + num;
        };
        var hour = Math.floor(second / 3600);
        var min = Math.floor((second - hour * 3600) / 60);
        var sec = Math.floor(second - hour * 3600 - min * 60);
        return (hour > 0 ? [
            hour,
            min,
            sec
        ] : [
            min,
            sec
        ]).map(add0).join(':');
    },
    getElementViewLeft: function getElementViewLeft(element) {
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        var elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            while (current !== null) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
        } else {
            while (current !== null && current !== element) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
        }
        return actualLeft - elementScrollLeft;
    },
    getBoundingClientRectViewLeft: function getBoundingClientRectViewLeft(element) {
        var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
        if (element.getBoundingClientRect) {
            if (typeof this.getBoundingClientRectViewLeft.offset !== 'number') {
                var temp = document.createElement('div');
                temp.style.cssText = 'position:absolute;top:0;left:0;';
                document.body.appendChild(temp);
                this.getBoundingClientRectViewLeft.offset = -temp.getBoundingClientRect().top - scrollTop;
                document.body.removeChild(temp);
                temp = null;
            }
            var rect = element.getBoundingClientRect();
            var offset = this.getBoundingClientRectViewLeft.offset;
            return rect.left + offset;
        } else {
            return this.getElementViewLeft(element);
        }
    },
    getScrollPosition: function getScrollPosition() {
        return {
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        };
    },
    setScrollPosition: function setScrollPosition(_ref) {
        var _ref$left = _ref.left, left = _ref$left === void 0 ? 0 : _ref$left, _ref$top = _ref.top, top = _ref$top === void 0 ? 0 : _ref$top;
        if (this.isFirefox) {
            document.documentElement.scrollLeft = left;
            document.documentElement.scrollTop = top;
        } else {
            window.scrollTo(left, top);
        }
    },
    isMobile: isMobile,
    isFirefox: /firefox/i.test(window.navigator.userAgent),
    isChrome: /chrome/i.test(window.navigator.userAgent),
    isSafari: /safari/i.test(window.navigator.userAgent),
    storage: {
        set: function set(key, value) {
            localStorage.setItem(key, value);
        },
        get: function get(key) {
            return localStorage.getItem(key);
        }
    },
    nameMap: {
        dragStart: isMobile ? 'touchstart' : 'mousedown',
        dragMove: isMobile ? 'touchmove' : 'mousemove',
        dragEnd: isMobile ? 'touchend' : 'mouseup'
    },
    debounce: function debounce(func) {
        var waitFor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        var timeout;
        var debounced = function debounced() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                return func.apply(void 0, args);
            }, waitFor);
        };
        return debounced;
    }
};
/* harmony default export */ const js_utils = (utils);
;// CONCATENATED MODULE: ./src/js/options.js
function options_typeof(o) {
    '@babel/helpers - typeof';
    return options_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, options_typeof(o);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, 'string');
    return 'symbol' == options_typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
    if ('object' != options_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != options_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
/* harmony default export */ function js_options(options) {
    var defaultOption = {
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
        playbackSpeed: [
            0.5,
            0.75,
            1,
            1.25,
            1.5,
            2
        ],
        video: {},
        contextmenu: [],
        mutex: true,
        pluginOptions: {
            hls: {},
            flv: {},
            dash: {},
            webtorrent: {}
        },
        preventClickToggle: false
    };
    options = _objectSpread(_objectSpread({}, defaultOption), options);
    !options.video.type && (options.video.type = 'auto');
    if (options.video.quality) {
        options.video.url = options.video.quality[options.video.defaultQuality || 0].url;
    }
    if (options.lang) {
        options.lang = options.lang.toLowerCase();
    }
    options.contextmenu = options.contextmenu.concat([{
            key: 'video-info',
            click: function click(player) {
                player.infoPanel.triggle();
            }
        }]);
    return options;
};
;// CONCATENATED MODULE: ./src/js/i18n.js
function i18n(lang) {
    var _this = this;
    this.lang = lang;
    this.fallbackLang = this.lang.includes('-') ? this.lang.split('-')[0] : this.lang;
    this.tran = function (key) {
        key = key.toLowerCase();
        if (tranTxt[_this.lang] && tranTxt[_this.lang][key]) {
            return tranTxt[_this.lang][key];
        } else if (tranTxt[_this.fallbackLang] && tranTxt[_this.fallbackLang][key]) {
            return tranTxt[_this.fallbackLang][key];
        } else if (standard[key]) {
            return standard[key];
        } else {
            return key;
        }
    };
}
var standard = {
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
    'video-info': 'Video info'
};
var tranTxt = {
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
        'video-info': '视频统计信息'
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
        'video-info': '影片統計訊息'
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
        'video-info': '비디오 정보'
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
        'video-info': 'Video Info'
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
        'video-info': '動画情報'
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
        'video-info': 'Информация о видео'
    }
};

// EXTERNAL MODULE: ./src/assets/play.svg
var play = __webpack_require__(416);
var play_default = /*#__PURE__*/__webpack_require__.n(play);
// EXTERNAL MODULE: ./src/assets/pause.svg
var pause = __webpack_require__(32);
var pause_default = /*#__PURE__*/__webpack_require__.n(pause);
// EXTERNAL MODULE: ./src/assets/volume-up.svg
var volume_up = __webpack_require__(278);
var volume_up_default = /*#__PURE__*/__webpack_require__.n(volume_up);
// EXTERNAL MODULE: ./src/assets/volume-down.svg
var volume_down = __webpack_require__(513);
var volume_down_default = /*#__PURE__*/__webpack_require__.n(volume_down);
// EXTERNAL MODULE: ./src/assets/volume-off.svg
var volume_off = __webpack_require__(204);
var volume_off_default = /*#__PURE__*/__webpack_require__.n(volume_off);
// EXTERNAL MODULE: ./src/assets/full.svg
var full = __webpack_require__(717);
var full_default = /*#__PURE__*/__webpack_require__.n(full);
// EXTERNAL MODULE: ./src/assets/exit-full.svg
var exit_full = __webpack_require__(944);
var exit_full_default = /*#__PURE__*/__webpack_require__.n(exit_full);
// EXTERNAL MODULE: ./src/assets/full-web.svg
var full_web = __webpack_require__(928);
var full_web_default = /*#__PURE__*/__webpack_require__.n(full_web);
// EXTERNAL MODULE: ./src/assets/exit-web-full.svg
var exit_web_full = __webpack_require__(95);
var exit_web_full_default = /*#__PURE__*/__webpack_require__.n(exit_web_full);
// EXTERNAL MODULE: ./src/assets/setting.svg
var setting = __webpack_require__(894);
var setting_default = /*#__PURE__*/__webpack_require__.n(setting);
// EXTERNAL MODULE: ./src/assets/right.svg
var right = __webpack_require__(460);
var right_default = /*#__PURE__*/__webpack_require__.n(right);
// EXTERNAL MODULE: ./src/assets/camera.svg
var camera = __webpack_require__(631);
var camera_default = /*#__PURE__*/__webpack_require__.n(camera);
// EXTERNAL MODULE: ./src/assets/airplay.svg
var airplay = __webpack_require__(28);
var airplay_default = /*#__PURE__*/__webpack_require__.n(airplay);
// EXTERNAL MODULE: ./src/assets/loading.svg
var loading = __webpack_require__(454);
var loading_default = /*#__PURE__*/__webpack_require__.n(loading);
// EXTERNAL MODULE: ./src/assets/chromecast.svg
var chromecast = __webpack_require__(273);
var chromecast_default = /*#__PURE__*/__webpack_require__.n(chromecast);
;// CONCATENATED MODULE: ./src/js/icons.js















var Icons = {
    play: (play_default()),
    pause: (pause_default()),
    volumeUp: (volume_up_default()),
    volumeDown: (volume_down_default()),
    volumeOff: (volume_off_default()),
    full: (full_default()),
    exitFull: (exit_full_default()),
    exitWebFull: (exit_web_full_default()),
    fullWeb: (full_web_default()),
    setting: (setting_default()),
    right: (right_default()),
    camera: (camera_default()),
    loading: (loading_default()),
    airplay: (airplay_default()),
    chromecast: (chromecast_default())
};
/* harmony default export */ const icons = (Icons);
// EXTERNAL MODULE: ./src/template/player.art
var player = __webpack_require__(80);
var player_default = /*#__PURE__*/__webpack_require__.n(player);
;// CONCATENATED MODULE: ./src/js/template.js
function template_typeof(o) {
    '@babel/helpers - typeof';
    return template_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, template_typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, template_toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function template_toPropertyKey(t) {
    var i = template_toPrimitive(t, 'string');
    return 'symbol' == template_typeof(i) ? i : i + '';
}
function template_toPrimitive(t, r) {
    if ('object' != template_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != template_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
function _classPrivateMethodInitSpec(e, a) {
    _checkPrivateRedeclaration(e, a), a.add(e);
}
function _checkPrivateRedeclaration(e, t) {
    if (t.has(e))
        throw new TypeError('Cannot initialize the same private elements twice on an object');
}
function _assertClassBrand(e, t, n) {
    if ('function' == typeof e ? e === t : e.has(t))
        return arguments.length < 3 ? t : n;
    throw new TypeError('Private element is not present on this object');
}



var _Template_brand = new WeakSet();
var Template = function () {
    function Template(options) {
        _classCallCheck(this, Template);
        _classPrivateMethodInitSpec(this, _Template_brand);
        this.container = options.container;
        this.options = options.options;
        this.index = options.index;
        this.tran = options.tran;
        this.init();
    }
    return _createClass(Template, [{
            key: 'init',
            value: function init() {
                this.container.innerHTML = player_default()({
                    options: this.options,
                    index: this.index,
                    tran: this.tran,
                    icons: icons,
                    mobile: js_utils.isMobile,
                    video: {
                        temp: false,
                        poster: this.options.video.poster,
                        screenshot: this.options.screenshot,
                        airplay: js_utils.isSafari && !js_utils.isChrome ? this.options.airplay : false,
                        chromecast: this.options.chromecast,
                        preload: this.options.preload,
                        url: this.options.video.url
                    }
                });
                this.volumeBar = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-volume-bar-inner');
                this.volumeBarWrap = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-volume-bar');
                this.volumeBarWrapWrap = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-volume-bar-wrap');
                this.volumeButton = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-volume');
                this.volumeIcon = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-volume-icon');
                this.playedBar = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-played');
                this.loadedBar = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-loaded');
                this.playedBarWrap = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-bar-wrap');
                this.playedBarTime = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-bar-time');
                this.bezel = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-bezel-icon');
                this.playButton = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-play-icon');
                this.mobilePlayButton = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-mobile-play');
                this.videoWrap = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-video-wrap');
                this.video = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-video');
                this.controllerMask = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-controller-mask');
                this.ptime = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-ptime');
                this.settingButton = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-setting-icon');
                this.settingBox = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-setting-box');
                this.settingItems = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-setting-item', true);
                this.settingBack = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-setting-back');
                this.loop = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-toggle-loop');
                this.mask = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-mask');
                this.dtime = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-dtime');
                this.controller = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-controller');
                this.browserFullButton = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-full-icon');
                this.webFullButton = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-full-in-icon');
                this.menu = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-menu');
                this.menuItem = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-menu-item', true);
                this.camareButton = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-camera-icon');
                this.airplayButton = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-airplay-icon');
                this.chromecastButton = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-chromecast-icon');
                this.barPreview = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-bar-preview');
                this.barWrap = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-bar-wrap');
                this.noticeList = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-notice-list');
                this.infoPanel = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-info-panel');
                this.infoPanelClose = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-info-panel-close');
                this.infoList = _assertClassBrand(_Template_brand, this, _select).call(this, '.xplayer-info-list');
            }
        }], [{
            key: 'NewNotice',
            value: function NewNotice(text, opacity, id) {
                var notice = document.createElement('div');
                notice.classList.add('xplayer-notice');
                notice.style.opacity = opacity;
                notice.innerText = text;
                if (id) {
                    notice.id = 'xplayer-notice-'.concat(id);
                }
                return notice;
            }
        }]);
}();
function _select(el) {
    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (all) {
        return this.container.querySelectorAll(el);
    }
    return this.container.querySelector(el);
}
/* harmony default export */ const template = (Template);
;// CONCATENATED MODULE: ./src/js/events.js
function events_typeof(o) {
    '@babel/helpers - typeof';
    return events_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, events_typeof(o);
}
function events_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function events_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, events_toPropertyKey(o.key), o);
    }
}
function events_createClass(e, r, t) {
    return r && events_defineProperties(e.prototype, r), t && events_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function events_toPropertyKey(t) {
    var i = events_toPrimitive(t, 'string');
    return 'symbol' == events_typeof(i) ? i : i + '';
}
function events_toPrimitive(t, r) {
    if ('object' != events_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != events_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
var Events = function () {
    function Events() {
        events_classCallCheck(this, Events);
        this.events = {};
        this.videoEvents = [
            'abort',
            'canplay',
            'canplaythrough',
            'durationchange',
            'emptied',
            'ended',
            'error',
            'loadeddata',
            'loadedmetadata',
            'loadstart',
            'mozaudioavailable',
            'pause',
            'play',
            'playing',
            'progress',
            'ratechange',
            'seeked',
            'seeking',
            'stalled',
            'suspend',
            'timeupdate',
            'volumechange',
            'waiting'
        ];
        this.playerEvents = [
            'screenshot',
            'thumbnails_show',
            'thumbnails_hide',
            'contextmenu_show',
            'contextmenu_hide',
            'notice_show',
            'notice_hide',
            'quality_start',
            'quality_end',
            'destroy',
            'resize',
            'fullscreen',
            'fullscreen_cancel',
            'webfullscreen',
            'webfullscreen_cancel'
        ];
    }
    return events_createClass(Events, [
        {
            key: 'on',
            value: function on(name, callback) {
                if (this.type(name) && typeof callback === 'function') {
                    if (!this.events[name]) {
                        this.events[name] = [];
                    }
                    this.events[name].push(callback);
                }
            }
        },
        {
            key: 'trigger',
            value: function trigger(name, info) {
                if (this.events[name] && this.events[name].length) {
                    for (var i = 0; i < this.events[name].length; i++) {
                        this.events[name][i](info);
                    }
                }
            }
        },
        {
            key: 'type',
            value: function type(name) {
                if (this.playerEvents.indexOf(name) !== -1) {
                    return 'player';
                } else if (this.videoEvents.indexOf(name) !== -1) {
                    return 'video';
                }
                console.error('Unknown event name: '.concat(name));
                return null;
            }
        }
    ]);
}();
/* harmony default export */ const events = (Events);
;// CONCATENATED MODULE: ./src/js/fullscreen.js
function fullscreen_typeof(o) {
    '@babel/helpers - typeof';
    return fullscreen_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, fullscreen_typeof(o);
}
function fullscreen_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function fullscreen_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, fullscreen_toPropertyKey(o.key), o);
    }
}
function fullscreen_createClass(e, r, t) {
    return r && fullscreen_defineProperties(e.prototype, r), t && fullscreen_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function fullscreen_toPropertyKey(t) {
    var i = fullscreen_toPrimitive(t, 'string');
    return 'symbol' == fullscreen_typeof(i) ? i : i + '';
}
function fullscreen_toPrimitive(t, r) {
    if ('object' != fullscreen_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != fullscreen_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}

var FullScreen = function () {
    function FullScreen(player) {
        var _this = this;
        fullscreen_classCallCheck(this, FullScreen);
        this.player = player;
        this.lastScrollPosition = {
            left: 0,
            top: 0
        };
        this.player.events.on('webfullscreen', function () {
            _this.player.resize();
        });
        this.player.events.on('webfullscreen_cancel', function () {
            _this.player.resize();
            js_utils.setScrollPosition(_this.lastScrollPosition);
        });
        this.fullscreenchange = function () {
            _this.player.resize();
            if (_this.isFullScreen('browser')) {
                _this.player.events.trigger('fullscreen');
            } else {
                js_utils.setScrollPosition(_this.lastScrollPosition);
                _this.player.events.trigger('fullscreen_cancel');
            }
        };
        this.docfullscreenchange = function () {
            var fullEle = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (fullEle && fullEle !== _this.player.container) {
                return;
            }
            _this.player.resize();
            if (fullEle) {
                _this.player.events.trigger('fullscreen');
            } else {
                js_utils.setScrollPosition(_this.lastScrollPosition);
                _this.player.events.trigger('fullscreen_cancel');
            }
        };
        if (/Firefox/.test(navigator.userAgent)) {
            document.addEventListener('mozfullscreenchange', this.docfullscreenchange);
            document.addEventListener('fullscreenchange', this.docfullscreenchange);
        } else {
            this.player.container.addEventListener('fullscreenchange', this.fullscreenchange);
            this.player.container.addEventListener('webkitfullscreenchange', this.fullscreenchange);
            document.addEventListener('msfullscreenchange', this.docfullscreenchange);
            document.addEventListener('MSFullscreenChange', this.docfullscreenchange);
        }
    }
    return fullscreen_createClass(FullScreen, [
        {
            key: 'isFullScreen',
            value: function isFullScreen() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
                switch (type) {
                case 'browser':
                    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                case 'web':
                    return this.player.container.classList.contains('xplayer-fulled');
                }
            }
        },
        {
            key: 'request',
            value: function request() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
                var anotherType = type === 'browser' ? 'web' : 'browser';
                var anotherTypeOn = this.isFullScreen(anotherType);
                if (!anotherTypeOn) {
                    this.lastScrollPosition = js_utils.getScrollPosition();
                }
                switch (type) {
                case 'browser':
                    if (this.player.container.requestFullscreen) {
                        this.player.container.requestFullscreen();
                    } else if (this.player.container.mozRequestFullScreen) {
                        this.player.container.mozRequestFullScreen();
                    } else if (this.player.container.webkitRequestFullscreen) {
                        this.player.container.webkitRequestFullscreen();
                    } else if (this.player.video.webkitEnterFullscreen) {
                        this.player.video.webkitEnterFullscreen();
                    } else if (this.player.container.msRequestFullscreen) {
                        this.player.container.msRequestFullscreen();
                    }
                    break;
                case 'web':
                    this.player.container.classList.add('xplayer-fulled');
                    this.player.events.trigger('webfullscreen');
                    break;
                }
                if (anotherTypeOn) {
                    this.cancel(anotherType);
                }
            }
        },
        {
            key: 'cancel',
            value: function cancel() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
                switch (type) {
                case 'browser':
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.webkitCancelFullscreen) {
                        document.webkitCancelFullscreen();
                    } else if (document.msCancelFullScreen) {
                        document.msCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                    break;
                case 'web':
                    this.player.container.classList.remove('xplayer-fulled');
                    this.player.events.trigger('webfullscreen_cancel');
                    break;
                }
            }
        },
        {
            key: 'toggle',
            value: function toggle() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
                if (this.isFullScreen(type)) {
                    this.cancel(type);
                } else {
                    this.request(type);
                }
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                if (/Firefox/.test(navigator.userAgent)) {
                    document.removeEventListener('mozfullscreenchange', this.docfullscreenchange);
                    document.removeEventListener('fullscreenchange', this.docfullscreenchange);
                } else {
                    this.player.container.removeEventListener('fullscreenchange', this.fullscreenchange);
                    this.player.container.removeEventListener('webkitfullscreenchange', this.fullscreenchange);
                    document.removeEventListener('msfullscreenchange', this.docfullscreenchange);
                    document.removeEventListener('MSFullscreenChange', this.docfullscreenchange);
                }
            }
        }
    ]);
}();
/* harmony default export */ const fullscreen = (FullScreen);
;// CONCATENATED MODULE: ./src/js/user.js
function user_typeof(o) {
    '@babel/helpers - typeof';
    return user_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, user_typeof(o);
}
function user_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function user_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, user_toPropertyKey(o.key), o);
    }
}
function user_createClass(e, r, t) {
    return r && user_defineProperties(e.prototype, r), t && user_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function user_toPropertyKey(t) {
    var i = user_toPrimitive(t, 'string');
    return 'symbol' == user_typeof(i) ? i : i + '';
}
function user_toPrimitive(t, r) {
    if ('object' != user_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != user_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}

var User = function () {
    function User(player) {
        user_classCallCheck(this, User);
        this.storageName = { volume: 'xplayer-volume' };
        this['default'] = { volume: player.options.hasOwnProperty('volume') ? player.options.volume : 0.7 };
        this.data = {};
        this.init();
    }
    return user_createClass(User, [
        {
            key: 'init',
            value: function init() {
                for (var item in this.storageName) {
                    var name = this.storageName[item];
                    this.data[item] = parseFloat(js_utils.storage.get(name) || this['default'][item]);
                }
            }
        },
        {
            key: 'get',
            value: function get(key) {
                return this.data[key];
            }
        },
        {
            key: 'set',
            value: function set(key, value) {
                this.data[key] = value;
                js_utils.storage.set(this.storageName[key], value);
            }
        }
    ]);
}();
/* harmony default export */ const user = (User);
;// CONCATENATED MODULE: ./src/js/bar.js
function bar_typeof(o) {
    '@babel/helpers - typeof';
    return bar_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, bar_typeof(o);
}
function bar_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function bar_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, bar_toPropertyKey(o.key), o);
    }
}
function bar_createClass(e, r, t) {
    return r && bar_defineProperties(e.prototype, r), t && bar_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function bar_toPropertyKey(t) {
    var i = bar_toPrimitive(t, 'string');
    return 'symbol' == bar_typeof(i) ? i : i + '';
}
function bar_toPrimitive(t, r) {
    if ('object' != bar_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != bar_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
var Bar = function () {
    function Bar(template) {
        bar_classCallCheck(this, Bar);
        this.elements = {};
        this.elements.volume = template.volumeBar;
        this.elements.played = template.playedBar;
        this.elements.loaded = template.loadedBar;
    }
    return bar_createClass(Bar, [
        {
            key: 'set',
            value: function set(type, percentage, direction) {
                percentage = Math.max(percentage, 0);
                percentage = Math.min(percentage, 1);
                this.elements[type].style[direction] = percentage * 100 + '%';
            }
        },
        {
            key: 'get',
            value: function get(type) {
                return parseFloat(this.elements[type].style.width) / 100;
            }
        }
    ]);
}();
/* harmony default export */ const bar = (Bar);
;// CONCATENATED MODULE: ./src/js/timer.js
function timer_typeof(o) {
    '@babel/helpers - typeof';
    return timer_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, timer_typeof(o);
}
function timer_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function timer_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, timer_toPropertyKey(o.key), o);
    }
}
function timer_createClass(e, r, t) {
    return r && timer_defineProperties(e.prototype, r), t && timer_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function timer_toPropertyKey(t) {
    var i = timer_toPrimitive(t, 'string');
    return 'symbol' == timer_typeof(i) ? i : i + '';
}
function timer_toPrimitive(t, r) {
    if ('object' != timer_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != timer_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
var Timer = function () {
    function Timer(player) {
        timer_classCallCheck(this, Timer);
        this.player = player;
        window.requestAnimationFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        }();
        this.types = [
            'loading',
            'info',
            'fps'
        ];
        this.init();
    }
    return timer_createClass(Timer, [
        {
            key: 'init',
            value: function init() {
                var _this = this;
                this.types.map(function (item) {
                    if (item !== 'fps') {
                        _this['init'.concat(item, 'Checker')]();
                    }
                    return item;
                });
            }
        },
        {
            key: 'initloadingChecker',
            value: function initloadingChecker() {
                var _this2 = this;
                var lastPlayPos = 0;
                var currentPlayPos = 0;
                var bufferingDetected = false;
                this.loadingChecker = setInterval(function () {
                    if (_this2.enableloadingChecker) {
                        currentPlayPos = _this2.player.video.currentTime;
                        if (!bufferingDetected && currentPlayPos === lastPlayPos && !_this2.player.video.paused) {
                            _this2.player.container.classList.add('xplayer-loading');
                            bufferingDetected = true;
                        }
                        if (bufferingDetected && currentPlayPos > lastPlayPos && !_this2.player.video.paused) {
                            _this2.player.container.classList.remove('xplayer-loading');
                            bufferingDetected = false;
                        }
                        lastPlayPos = currentPlayPos;
                    }
                }, 100);
            }
        },
        {
            key: 'initfpsChecker',
            value: function initfpsChecker() {
                var _this3 = this;
                window.requestAnimationFrame(function () {
                    if (_this3.enablefpsChecker) {
                        _this3.initfpsChecker();
                        if (!_this3.fpsStart) {
                            _this3.fpsStart = new Date();
                            _this3.fpsIndex = 0;
                        } else {
                            _this3.fpsIndex++;
                            var fpsCurrent = new Date();
                            if (fpsCurrent - _this3.fpsStart > 1000) {
                                _this3.player.infoPanel.fps(_this3.fpsIndex / (fpsCurrent - _this3.fpsStart) * 1000);
                                _this3.fpsStart = new Date();
                                _this3.fpsIndex = 0;
                            }
                        }
                    } else {
                        _this3.fpsStart = 0;
                        _this3.fpsIndex = 0;
                    }
                });
            }
        },
        {
            key: 'initinfoChecker',
            value: function initinfoChecker() {
                var _this4 = this;
                this.infoChecker = setInterval(function () {
                    if (_this4.enableinfoChecker) {
                        _this4.player.infoPanel.update();
                    }
                }, 1000);
            }
        },
        {
            key: 'enable',
            value: function enable(type) {
                this['enable'.concat(type, 'Checker')] = true;
                if (type === 'fps') {
                    this.initfpsChecker();
                }
            }
        },
        {
            key: 'disable',
            value: function disable(type) {
                this['enable'.concat(type, 'Checker')] = false;
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                var _this5 = this;
                this.types.map(function (item) {
                    _this5['enable'.concat(item, 'Checker')] = false;
                    _this5[''.concat(item, 'Checker')] && clearInterval(_this5[''.concat(item, 'Checker')]);
                    return item;
                });
            }
        }
    ]);
}();
/* harmony default export */ const timer = (Timer);
;// CONCATENATED MODULE: ./src/js/bezel.js
function bezel_typeof(o) {
    '@babel/helpers - typeof';
    return bezel_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, bezel_typeof(o);
}
function bezel_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function bezel_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, bezel_toPropertyKey(o.key), o);
    }
}
function bezel_createClass(e, r, t) {
    return r && bezel_defineProperties(e.prototype, r), t && bezel_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function bezel_toPropertyKey(t) {
    var i = bezel_toPrimitive(t, 'string');
    return 'symbol' == bezel_typeof(i) ? i : i + '';
}
function bezel_toPrimitive(t, r) {
    if ('object' != bezel_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != bezel_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
var Bezel = function () {
    function Bezel(container) {
        var _this = this;
        bezel_classCallCheck(this, Bezel);
        this.container = container;
        this.container.addEventListener('animationend', function () {
            _this.container.classList.remove('xplayer-bezel-transition');
        });
    }
    return bezel_createClass(Bezel, [{
            key: 'switch',
            value: function _switch(icon) {
                this.container.innerHTML = icon;
                this.container.classList.add('xplayer-bezel-transition');
            }
        }]);
}();
/* harmony default export */ const bezel = (Bezel);
;// CONCATENATED MODULE: ./src/js/thumbnails.js
function thumbnails_typeof(o) {
    '@babel/helpers - typeof';
    return thumbnails_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, thumbnails_typeof(o);
}
function thumbnails_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function thumbnails_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, thumbnails_toPropertyKey(o.key), o);
    }
}
function thumbnails_createClass(e, r, t) {
    return r && thumbnails_defineProperties(e.prototype, r), t && thumbnails_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function thumbnails_toPropertyKey(t) {
    var i = thumbnails_toPrimitive(t, 'string');
    return 'symbol' == thumbnails_typeof(i) ? i : i + '';
}
function thumbnails_toPrimitive(t, r) {
    if ('object' != thumbnails_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != thumbnails_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
var THUMBNAIL_WIDTH = 200;
var Thumbnails = function () {
    function Thumbnails(options) {
        thumbnails_classCallCheck(this, Thumbnails);
        this.container = options.container;
        this.barWidth = options.barWidth;
        this.container.style.backgroundImage = 'url(\''.concat(options.url, '\')');
        this.events = options.events;
        this.count = options.count || 100;
        this.container.style.backgroundSize = ''.concat(this.count * THUMBNAIL_WIDTH, 'px 100%');
    }
    return thumbnails_createClass(Thumbnails, [
        {
            key: 'resize',
            value: function resize(aspectRatio, barWrapWidth) {
                var height = aspectRatio * THUMBNAIL_WIDTH;
                this.container.style.width = ''.concat(THUMBNAIL_WIDTH, 'px');
                this.container.style.height = ''.concat(height, 'px');
                this.container.style.top = ''.concat(-height - 25, 'px');
                this.barWidth = barWrapWidth;
            }
        },
        {
            key: 'show',
            value: function show() {
                this.container.style.display = 'block';
                this.events && this.events.trigger('thumbnails_show');
            }
        },
        {
            key: 'move',
            value: function move(position) {
                this.container.style.backgroundPosition = '-'.concat((Math.ceil(position / this.barWidth * this.count) - 1) * THUMBNAIL_WIDTH, 'px 0');
                this.container.style.left = ''.concat(Math.min(Math.max(position - this.container.offsetWidth / 2, 0), this.barWidth - THUMBNAIL_WIDTH - 4), 'px');
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.container.style.display = 'none';
                this.events && this.events.trigger('thumbnails_hide');
            }
        }
    ]);
}();
/* harmony default export */ const thumbnails = (Thumbnails);
;// CONCATENATED MODULE: ./src/js/controller.js
function controller_typeof(o) {
    '@babel/helpers - typeof';
    return controller_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, controller_typeof(o);
}
function controller_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function controller_objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? controller_ownKeys(Object(t), !0).forEach(function (r) {
            controller_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : controller_ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function controller_defineProperty(e, r, t) {
    return (r = controller_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function controller_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function controller_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, controller_toPropertyKey(o.key), o);
    }
}
function controller_createClass(e, r, t) {
    return r && controller_defineProperties(e.prototype, r), t && controller_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function controller_toPropertyKey(t) {
    var i = controller_toPrimitive(t, 'string');
    return 'symbol' == controller_typeof(i) ? i : i + '';
}
function controller_toPrimitive(t, r) {
    if ('object' != controller_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != controller_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}



var cast;
var runOnce = true;
var isCasting = false;
var dragBar = false;
var Controller = function () {
    function Controller(player) {
        controller_classCallCheck(this, Controller);
        this.player = player;
        this.autoHideTimer = 0;
        this.setAutoHideHandler = this.setAutoHide.bind(this);
        this.player.on('play', this.setAutoHideHandler);
        this.player.on('pause', this.setAutoHideHandler);
        if (!js_utils.isMobile) {
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
        if (!js_utils.isMobile) {
            this.initVolumeButton();
        }
    }
    return controller_createClass(Controller, [
        {
            key: 'initPlayButton',
            value: function initPlayButton() {
                var _this = this;
                this.player.template.playButton.addEventListener('click', function () {
                    _this.player.toggle();
                });
                this.player.template.mobilePlayButton.addEventListener('click', function () {
                    _this.player.toggle();
                });
                if (!js_utils.isMobile) {
                    if (!this.player.options.preventClickToggle) {
                        this.player.template.videoWrap.addEventListener('click', function () {
                            _this.player.toggle();
                        });
                        this.player.template.controllerMask.addEventListener('click', function () {
                            _this.player.toggle();
                        });
                    }
                } else {
                    this.player.template.videoWrap.addEventListener('click', function () {
                        _this.toggle();
                    });
                    this.player.template.controllerMask.addEventListener('click', function () {
                        _this.toggle();
                    });
                }
            }
        },
        {
            key: 'initHighlights',
            value: function initHighlights() {
                var _this2 = this;
                this.player.on('durationchange', function () {
                    if (_this2.player.video.duration !== 1 && _this2.player.video.duration !== Infinity) {
                        if (_this2.player.options.highlight) {
                            var highlights = _this2.player.template.playedBarWrap.querySelectorAll('.xplayer-highlight');
                            [].slice.call(highlights, 0).forEach(function (item) {
                                _this2.player.template.playedBarWrap.removeChild(item);
                            });
                            for (var i = 0; i < _this2.player.options.highlight.length; i++) {
                                if (!_this2.player.options.highlight[i].text || !_this2.player.options.highlight[i].time) {
                                    continue;
                                }
                                var p = document.createElement('div');
                                p.classList.add('xplayer-highlight');
                                p.style.left = _this2.player.options.highlight[i].time / _this2.player.video.duration * 100 + '%';
                                p.innerHTML = '<span class="xplayer-highlight-text">' + _this2.player.options.highlight[i].text + '</span>';
                                _this2.player.template.playedBarWrap.insertBefore(p, _this2.player.template.playedBarTime);
                            }
                        }
                    }
                });
            }
        },
        {
            key: 'initThumbnails',
            value: function initThumbnails() {
                var _this3 = this;
                if (this.player.options.video.thumbnails) {
                    this.thumbnails = new thumbnails(controller_objectSpread({
                        container: this.player.template.barPreview,
                        barWidth: this.player.template.barWrap.offsetWidth,
                        events: this.player.events
                    }, this.player.options.video.thumbnails));
                    this.player.on('loadedmetadata', function () {
                        _this3.thumbnails.resize(_this3.player.video.videoHeight / _this3.player.video.videoWidth, _this3.player.template.barWrap.offsetWidth);
                    });
                }
            }
        },
        {
            key: 'initPlayedBar',
            value: function initPlayedBar() {
                var _this4 = this;
                this.player.on('durationchange', function () {
                    if (_this4.player.video.duration !== 1 && _this4.player.video.duration !== Infinity && dragBar) {
                        _this4.player.seek(_this4.player.bar.get('played') * _this4.player.video.duration);
                    }
                });
                var thumbMove = function thumbMove(e) {
                    var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this4.player.template.playedBarWrap)) / _this4.player.template.playedBarWrap.clientWidth;
                    percentage = Math.max(percentage, 0);
                    percentage = Math.min(percentage, 1);
                    _this4.player.bar.set('played', percentage, 'width');
                    _this4.player.template.ptime.innerHTML = js_utils.secondToTime(percentage * _this4.player.video.duration);
                };
                var thumbUp = function thumbUp(e) {
                    document.removeEventListener(js_utils.nameMap.dragEnd, thumbUp);
                    document.removeEventListener(js_utils.nameMap.dragMove, thumbMove);
                    var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this4.player.template.playedBarWrap)) / _this4.player.template.playedBarWrap.clientWidth;
                    percentage = Math.max(percentage, 0);
                    percentage = Math.min(percentage, 1);
                    _this4.player.bar.set('played', percentage, 'width');
                    if (_this4.player.video.duration) {
                        _this4.player.seek(_this4.player.bar.get('played') * _this4.player.video.duration);
                    } else {
                        dragBar = true;
                    }
                    _this4.player.moveBar = false;
                };
                this.player.template.playedBarWrap.addEventListener(js_utils.nameMap.dragStart, function () {
                    _this4.player.moveBar = true;
                    document.addEventListener(js_utils.nameMap.dragMove, thumbMove);
                    document.addEventListener(js_utils.nameMap.dragEnd, thumbUp);
                });
                this.player.template.playedBarWrap.addEventListener(js_utils.nameMap.dragMove, function (e) {
                    if (_this4.player.video.duration) {
                        var px = _this4.player.template.playedBarWrap.getBoundingClientRect().left;
                        var tx = (e.clientX || e.changedTouches[0].clientX) - px;
                        if (tx < 0 || tx > _this4.player.template.playedBarWrap.offsetWidth) {
                            return;
                        }
                        var time = _this4.player.video.duration * (tx / _this4.player.template.playedBarWrap.offsetWidth);
                        if (js_utils.isMobile) {
                            _this4.thumbnails && _this4.thumbnails.show();
                        }
                        _this4.thumbnails && _this4.thumbnails.move(tx);
                        _this4.player.template.playedBarTime.style.left = ''.concat(tx - 50, 'px');
                        _this4.player.template.playedBarTime.innerText = js_utils.secondToTime(time);
                        _this4.player.template.playedBarTime.classList.remove('hidden');
                    }
                });
                this.player.template.playedBarWrap.addEventListener(js_utils.nameMap.dragEnd, function () {
                    if (js_utils.isMobile) {
                        _this4.thumbnails && _this4.thumbnails.hide();
                        _this4.player.template.playedBarTime.classList.add('hidden');
                    }
                });
                if (!js_utils.isMobile) {
                    this.player.template.playedBarWrap.addEventListener('mouseenter', function () {
                        if (_this4.player.video.duration) {
                            _this4.thumbnails && _this4.thumbnails.show();
                            _this4.player.template.playedBarTime.classList.remove('hidden');
                        }
                    });
                    this.player.template.playedBarWrap.addEventListener('mouseleave', function () {
                        if (_this4.player.video.duration) {
                            _this4.thumbnails && _this4.thumbnails.hide();
                            _this4.player.template.playedBarTime.classList.add('hidden');
                        }
                    });
                }
            }
        },
        {
            key: 'initFullButton',
            value: function initFullButton() {
                var _this5 = this;
                this.player.on('webfullscreen', function () {
                    _this5.player.template.webFullButton.innerHTML = icons.exitWebFull;
                });
                this.player.on('webfullscreen_cancel', function () {
                    _this5.player.template.webFullButton.innerHTML = icons.fullWeb;
                });
                this.player.on('fullscreen', function () {
                    _this5.player.template.browserFullButton.innerHTML = icons.exitFull;
                });
                this.player.on('fullscreen_cancel', function () {
                    _this5.player.template.browserFullButton.innerHTML = icons.full;
                });
                this.player.template.browserFullButton.addEventListener('click', function () {
                    _this5.player.fullScreen.toggle('browser');
                });
                this.player.template.webFullButton.addEventListener('click', function () {
                    _this5.player.fullScreen.toggle('web');
                });
            }
        },
        {
            key: 'initVolumeButton',
            value: function initVolumeButton() {
                var _this6 = this;
                var vWidth = 35;
                var volumeMove = function volumeMove(event) {
                    var e = event || window.event;
                    var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this6.player.template.volumeBarWrap) - 5.5) / vWidth;
                    _this6.player.volume(percentage);
                };
                var volumeUp = function volumeUp() {
                    document.removeEventListener(js_utils.nameMap.dragEnd, volumeUp);
                    document.removeEventListener(js_utils.nameMap.dragMove, volumeMove);
                    _this6.player.template.volumeButton.classList.remove('xplayer-volume-active');
                };
                this.player.template.volumeBarWrapWrap.addEventListener('click', function (event) {
                    var e = event || window.event;
                    var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this6.player.template.volumeBarWrap) - 5.5) / vWidth;
                    _this6.player.volume(percentage);
                });
                this.player.template.volumeBarWrapWrap.addEventListener(js_utils.nameMap.dragStart, function () {
                    document.addEventListener(js_utils.nameMap.dragMove, volumeMove);
                    document.addEventListener(js_utils.nameMap.dragEnd, volumeUp);
                    _this6.player.template.volumeButton.classList.add('xplayer-volume-active');
                });
                this.player.template.volumeIcon.addEventListener('click', function () {
                    if (_this6.player.video.muted) {
                        _this6.player.video.muted = false;
                        _this6.player.switchVolumeIcon();
                        _this6.player.bar.set('volume', _this6.player.volume(), 'width');
                    } else {
                        _this6.player.video.muted = true;
                        _this6.player.template.volumeIcon.innerHTML = icons.volumeOff;
                        _this6.player.bar.set('volume', 0, 'width');
                    }
                });
            }
        },
        {
            key: 'initScreenshotButton',
            value: function initScreenshotButton() {
                var _this7 = this;
                if (this.player.options.screenshot) {
                    this.player.template.camareButton.addEventListener('click', function () {
                        var canvas = document.createElement('canvas');
                        canvas.width = _this7.player.video.videoWidth;
                        canvas.height = _this7.player.video.videoHeight;
                        canvas.getContext('2d').drawImage(_this7.player.video, 0, 0, canvas.width, canvas.height);
                        var dataURL;
                        canvas.toBlob(function (blob) {
                            dataURL = URL.createObjectURL(blob);
                            var link = document.createElement('a');
                            link.href = dataURL;
                            link.download = 'xplayer.png';
                            link.style.display = 'none';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            URL.revokeObjectURL(dataURL);
                            _this7.player.events.trigger('screenshot', dataURL);
                        });
                    });
                }
            }
        },
        {
            key: 'initAirplayButton',
            value: function initAirplayButton() {
                if (this.player.options.airplay) {
                    if (window.WebKitPlaybackTargetAvailabilityEvent) {
                        this.player.video.addEventListener('webkitplaybacktargetavailabilitychanged', function (event) {
                            switch (event.availability) {
                            case 'available':
                                this.template.airplayButton.disable = false;
                                break;
                            default:
                                this.template.airplayButton.disable = true;
                            }
                            this.template.airplayButton.addEventListener('click', function () {
                                this.video.webkitShowPlaybackTargetPicker();
                            }.bind(this));
                        }.bind(this.player));
                    } else {
                        this.player.template.airplayButton.style.display = 'none';
                    }
                }
            }
        },
        {
            key: 'initChromecast',
            value: function initChromecast() {
                var script = window.document.createElement('script');
                script.setAttribute('type', 'text/javascript');
                script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1');
                window.document.body.appendChild(script);
                window.__onGCastApiAvailable = function (isAvailable) {
                    if (isAvailable && window.chrome.cast) {
                        cast = window.chrome.cast;
                        var sessionRequest = new cast.SessionRequest(cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
                        var apiConfig = new cast.ApiConfig(sessionRequest, function () {
                        }, function (status) {
                            if (status === cast.ReceiverAvailability.AVAILABLE) {
                                console.log('chromecast: ', status);
                            }
                        });
                        cast.initialize(apiConfig, function () {
                        });
                    }
                };
            }
        },
        {
            key: 'initChromecastButton',
            value: function initChromecastButton() {
                var _this8 = this;
                if (this.player.options.chromecast) {
                    if (runOnce) {
                        runOnce = false;
                        this.initChromecast();
                    }
                    var discoverDevices = function discoverDevices() {
                        cast.requestSession(function (s) {
                            _this8.session = s;
                            launchMedia(_this8.player.options.video.url);
                        }, function (err) {
                            if (err.code === 'cancel') {
                                _this8.session = undefined;
                            } else {
                                console.error('Error selecting a cast device', err);
                            }
                        });
                    };
                    var launchMedia = function launchMedia(media) {
                        var mediaInfo = new cast.media.MediaInfo(media);
                        var request = new cast.media.LoadRequest(mediaInfo);
                        if (!_this8.session) {
                            window.open(media);
                            return false;
                        }
                        _this8.session.loadMedia(request, onMediaDiscovered.bind(_this8, 'loadMedia'), onMediaError).play();
                        return true;
                    };
                    var onMediaDiscovered = function onMediaDiscovered(how, media) {
                        _this8.currentMedia = media;
                    };
                    var onMediaError = function onMediaError(err) {
                        console.error('Error launching media', err);
                    };
                    this.player.template.chromecastButton.addEventListener('click', function () {
                        if (isCasting) {
                            isCasting = false;
                            _this8.currentMedia.stop();
                            _this8.session.stop();
                            _this8.initChromecast();
                        } else {
                            isCasting = true;
                            discoverDevices();
                        }
                    });
                }
            }
        },
        {
            key: 'setAutoHide',
            value: function setAutoHide() {
                var _this9 = this;
                this.show();
                clearTimeout(this.autoHideTimer);
                this.autoHideTimer = setTimeout(function () {
                    if (_this9.player.video.played.length && !_this9.player.paused && !_this9.disableAutoHide) {
                        _this9.hide();
                    }
                }, 3000);
            }
        },
        {
            key: 'show',
            value: function show() {
                this.player.container.classList.remove('xplayer-hide-controller');
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.player.container.classList.add('xplayer-hide-controller');
                this.player.setting.hide();
            }
        },
        {
            key: 'isShow',
            value: function isShow() {
                return !this.player.container.classList.contains('xplayer-hide-controller');
            }
        },
        {
            key: 'toggle',
            value: function toggle() {
                if (this.isShow()) {
                    this.hide();
                } else {
                    this.show();
                }
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                if (!js_utils.isMobile) {
                    this.player.container.removeEventListener('mousemove', this.setAutoHideHandler);
                }
                clearTimeout(this.autoHideTimer);
            }
        }
    ]);
}();
/* harmony default export */ const controller = (Controller);
;// CONCATENATED MODULE: ./src/js/setting.js
function setting_typeof(o) {
    '@babel/helpers - typeof';
    return setting_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, setting_typeof(o);
}
function setting_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function setting_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, setting_toPropertyKey(o.key), o);
    }
}
function setting_createClass(e, r, t) {
    return r && setting_defineProperties(e.prototype, r), t && setting_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function setting_toPropertyKey(t) {
    var i = setting_toPrimitive(t, 'string');
    return 'symbol' == setting_typeof(i) ? i : i + '';
}
function setting_toPrimitive(t, r) {
    if ('object' != setting_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != setting_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}

var Setting = function () {
    function Setting(player, tran) {
        var _this = this;
        setting_classCallCheck(this, Setting);
        this.player = player;
        this.tran = tran;
        this.player.template.mask.addEventListener('click', function () {
            _this.hide();
        });
        this.player.template.settingButton.addEventListener('click', function () {
            _this.show();
        });
        this.player.template.settingBack.addEventListener('click', function () {
            _this.player.template.settingBox.className = 'xplayer-setting-box xplayer-setting-box-open';
        });
        this.loop = this.player.options.loop;
        this.loopToogle = this.player.template.loop.firstElementChild;
        this.loopToogle.checked = this.loop;
        this.player.template.loop.addEventListener('click', function () {
            _this.loop = !_this.loop;
            _this.loopToogle.checked = _this.loop;
        });
        var narrowPanel;
        var narrowPanelClass;
        var _loop = function _loop() {
            var node = _this.player.template.settingItems[i];
            node.addEventListener('click', function () {
                if (node.dataset.narrow) {
                    narrowPanelClass = 'xplayer-setting-narrow-'.concat(node.dataset.narrow);
                    narrowPanel = node;
                    _this.player.template.settingBox.classList.add(narrowPanelClass);
                } else if (narrowPanel) {
                    _this.player.template.settingBox.classList.remove(narrowPanelClass);
                    if (node.dataset.speed) {
                        var speed = Number(node.dataset.speed);
                        _this.player.speed(speed);
                        narrowPanel.children[1].innerText = speed === 1 ? tran('normal') : speed;
                    } else if (node.dataset.quality) {
                        _this.player.switchQuality(node.dataset.quality);
                        narrowPanel.children[1].innerText = _this.player.quality.name;
                    }
                }
            });
        };
        for (var i = 0; i < this.player.template.settingItems.length; i++) {
            _loop();
        }
    }
    return setting_createClass(Setting, [
        {
            key: 'hide',
            value: function hide() {
                this.player.template.settingBox.className = 'xplayer-setting-box';
                this.player.template.mask.classList.remove('xplayer-mask-show', 'xplayer-setting-mask');
                this.player.template.settingButton.classList.remove('xplayer-setting-active');
                this.player.controller.disableAutoHide = false;
                document.body.classList.remove('xplayer-fixed');
            }
        },
        {
            key: 'show',
            value: function show() {
                this.player.template.settingBox.classList.add('xplayer-setting-box-open');
                this.player.template.mask.classList.add('xplayer-mask-show', 'xplayer-setting-mask');
                this.player.template.settingButton.classList.add('xplayer-setting-active');
                this.player.controller.disableAutoHide = true;
                if (js_utils.isMobile) {
                    document.body.classList.add('xplayer-fixed');
                }
            }
        }
    ]);
}();
/* harmony default export */ const js_setting = (Setting);
;// CONCATENATED MODULE: ./src/js/hotkey.js
function hotkey_typeof(o) {
    '@babel/helpers - typeof';
    return hotkey_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, hotkey_typeof(o);
}
function hotkey_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function hotkey_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, hotkey_toPropertyKey(o.key), o);
    }
}
function hotkey_createClass(e, r, t) {
    return r && hotkey_defineProperties(e.prototype, r), t && hotkey_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function hotkey_toPropertyKey(t) {
    var i = hotkey_toPrimitive(t, 'string');
    return 'symbol' == hotkey_typeof(i) ? i : i + '';
}
function hotkey_toPrimitive(t, r) {
    if ('object' != hotkey_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != hotkey_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
var HotKey = function () {
    function HotKey(player) {
        hotkey_classCallCheck(this, HotKey);
        this.player = player;
        this.doHotKeyHandler = this.doHotKey.bind(this);
        this.cancelFullScreenHandler = this.cancelFullScreen.bind(this);
        if (this.player.options.hotkey) {
            document.addEventListener('keydown', this.doHotKeyHandler);
        }
        document.addEventListener('keydown', this.cancelFullScreenHandler);
    }
    return hotkey_createClass(HotKey, [
        {
            key: 'doHotKey',
            value: function doHotKey(e) {
                if (this.player.focus) {
                    var tag = document.activeElement.tagName.toUpperCase();
                    var editable = document.activeElement.getAttribute('contenteditable');
                    if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                        var event = e || window.event;
                        var percentage;
                        switch (event.keyCode) {
                        case 32:
                            event.preventDefault();
                            this.player.toggle();
                            break;
                        case 37:
                            event.preventDefault();
                            if (this.player.options.live) {
                                break;
                            }
                            this.player.seek(this.player.video.currentTime - 5);
                            this.player.controller.setAutoHide();
                            break;
                        case 39:
                            event.preventDefault();
                            if (this.player.options.live) {
                                break;
                            }
                            this.player.seek(this.player.video.currentTime + 5);
                            this.player.controller.setAutoHide();
                            break;
                        case 38:
                            event.preventDefault();
                            percentage = this.player.volume() + 0.1;
                            this.player.volume(percentage);
                            break;
                        case 40:
                            event.preventDefault();
                            percentage = this.player.volume() - 0.1;
                            this.player.volume(percentage);
                            break;
                        }
                    }
                }
            }
        },
        {
            key: 'cancelFullScreen',
            value: function cancelFullScreen(e) {
                var event = e || window.event;
                switch (event.keyCode) {
                case 27:
                    if (this.player.fullScreen.isFullScreen('web')) {
                        this.player.fullScreen.cancel('web');
                    }
                    break;
                }
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                if (this.player.options.hotkey) {
                    document.removeEventListener('keydown', this.doHotKeyHandler);
                }
                document.removeEventListener('keydown', this.cancelFullScreenHandler);
            }
        }
    ]);
}();
/* harmony default export */ const hotkey = (HotKey);
;// CONCATENATED MODULE: ./src/js/contextmenu.js
function contextmenu_typeof(o) {
    '@babel/helpers - typeof';
    return contextmenu_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, contextmenu_typeof(o);
}
function contextmenu_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function contextmenu_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, contextmenu_toPropertyKey(o.key), o);
    }
}
function contextmenu_createClass(e, r, t) {
    return r && contextmenu_defineProperties(e.prototype, r), t && contextmenu_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function contextmenu_toPropertyKey(t) {
    var i = contextmenu_toPrimitive(t, 'string');
    return 'symbol' == contextmenu_typeof(i) ? i : i + '';
}
function contextmenu_toPrimitive(t, r) {
    if ('object' != contextmenu_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != contextmenu_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
var ContextMenu = function () {
    function ContextMenu(player) {
        var _this = this;
        contextmenu_classCallCheck(this, ContextMenu);
        this.player = player;
        this.shown = false;
        Array.prototype.slice.call(this.player.template.menuItem).forEach(function (item, index) {
            if (_this.player.options.contextmenu[index].click) {
                item.addEventListener('click', function () {
                    _this.player.options.contextmenu[index].click(_this.player);
                    _this.hide();
                });
            }
        });
        this.contextmenuHandler = function (e) {
            if (_this.shown) {
                _this.hide();
                return;
            }
            var event = e || window.event;
            event.preventDefault();
            var clientRect = _this.player.container.getBoundingClientRect();
            _this.show(event.clientX - clientRect.left, event.clientY - clientRect.top);
            _this.player.template.mask.addEventListener('click', function () {
                _this.hide();
            });
        };
        this.player.container.addEventListener('contextmenu', this.contextmenuHandler);
    }
    return contextmenu_createClass(ContextMenu, [
        {
            key: 'show',
            value: function show(x, y) {
                var menu = this.player.template.menu;
                menu.classList.add('xplayer-menu-show');
                var clientRect = this.player.container.getBoundingClientRect();
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
        },
        {
            key: 'hide',
            value: function hide() {
                this.player.template.mask.classList.remove('xplayer-mask-show');
                this.player.template.menu.classList.remove('xplayer-menu-show');
                this.shown = false;
                this.player.events.trigger('contextmenu_hide');
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                this.player.container.removeEventListener('contextmenu', this.contextmenuHandler);
            }
        }
    ]);
}();
/* harmony default export */ const contextmenu = (ContextMenu);
;// CONCATENATED MODULE: ./src/js/info-panel.js
function info_panel_typeof(o) {
    '@babel/helpers - typeof';
    return info_panel_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, info_panel_typeof(o);
}
function info_panel_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function info_panel_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, info_panel_toPropertyKey(o.key), o);
    }
}
function info_panel_createClass(e, r, t) {
    return r && info_panel_defineProperties(e.prototype, r), t && info_panel_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function info_panel_toPropertyKey(t) {
    var i = info_panel_toPrimitive(t, 'string');
    return 'symbol' == info_panel_typeof(i) ? i : i + '';
}
function info_panel_toPrimitive(t, r) {
    if ('object' != info_panel_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != info_panel_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
function info_panel_classPrivateMethodInitSpec(e, a) {
    info_panel_checkPrivateRedeclaration(e, a), a.add(e);
}
function info_panel_checkPrivateRedeclaration(e, t) {
    if (t.has(e))
        throw new TypeError('Cannot initialize the same private elements twice on an object');
}
function info_panel_assertClassBrand(e, t, n) {
    if ('function' == typeof e ? e === t : e.has(t))
        return arguments.length < 3 ? t : n;
    throw new TypeError('Private element is not present on this object');
}
var _InfoPanel_brand = new WeakSet();
var InfoPanel = function () {
    function InfoPanel(player) {
        var _this = this;
        info_panel_classCallCheck(this, InfoPanel);
        info_panel_classPrivateMethodInitSpec(this, _InfoPanel_brand);
        this.container = player.template.infoPanel;
        this.template = player.template;
        this.video = player.video;
        this.player = player;
        this.template.infoPanelClose.addEventListener('click', function () {
            _this.hide();
        });
    }
    return info_panel_createClass(InfoPanel, [
        {
            key: 'show',
            value: function show() {
                this.init();
                this.beginTime = Date.now();
                this.update();
                this.player.timer.enable('info');
                this.player.timer.enable('fps');
                this.container.classList.remove('xplayer-info-panel-hide');
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.player.timer.disable('info');
                this.player.timer.disable('fps');
                this.container.classList.add('xplayer-info-panel-hide');
            }
        },
        {
            key: 'triggle',
            value: function triggle() {
                if (this.container.classList.contains('xplayer-info-panel-hide')) {
                    this.show();
                } else {
                    this.hide();
                }
            }
        },
        {
            key: 'update',
            value: function update() {
                this.infoVersion.innerHTML = 'v'.concat("1.0.2", ' ').concat("cd37615");
                this.infoType.innerHTML = this.player.type;
                this.infoViewport.innerHTML = ''.concat(this.player.video.clientWidth, ' x ').concat(this.player.video.clientHeight, ' / ').concat(this.player.video.videoWidth, ' x ').concat(this.player.video.videoHeight);
                this.infoDuration.innerHTML = this.player.video.duration || 0;
                this.infoDate.innerHTML = new Date();
                this.infoVolume.innerHTML = ''.concat(Math.floor(this.player.video.volume * 100), '%');
            }
        },
        {
            key: 'fps',
            value: function fps(value) {
                this.infoFPS.innerHTML = ''.concat(value.toFixed(1));
            }
        },
        {
            key: 'init',
            value: function init() {
                this.template.infoList.innerHTML = '';
                this.infoVersion = info_panel_assertClassBrand(_InfoPanel_brand, this, _createItem).call(this, 'Player Version');
                this.infoFPS = info_panel_assertClassBrand(_InfoPanel_brand, this, _createItem).call(this, 'FPS');
                this.infoType = info_panel_assertClassBrand(_InfoPanel_brand, this, _createItem).call(this, 'Video Type');
                this.infoViewport = info_panel_assertClassBrand(_InfoPanel_brand, this, _createItem).call(this, 'Viewport / Resolution');
                this.infoDuration = info_panel_assertClassBrand(_InfoPanel_brand, this, _createItem).call(this, 'Video Duration');
                this.infoVolume = info_panel_assertClassBrand(_InfoPanel_brand, this, _createItem).call(this, 'Volume');
                this.infoDate = info_panel_assertClassBrand(_InfoPanel_brand, this, _createItem).call(this, 'Date');
            }
        }
    ]);
}();
function _createItem(itemName) {
    var item = document.createElement('div');
    item.classList.add('xplayer-info-panel-item');
    var title = document.createElement('span');
    title.innerText = itemName;
    item.appendChild(title);
    var data = document.createElement('span');
    item.appendChild(data);
    this.template.infoList.appendChild(item);
    return data;
}
/* harmony default export */ const info_panel = (InfoPanel);
// EXTERNAL MODULE: ./src/template/video.art
var video = __webpack_require__(866);
var video_default = /*#__PURE__*/__webpack_require__.n(video);
;// CONCATENATED MODULE: ./src/js/player.js
function player_typeof(o) {
    '@babel/helpers - typeof';
    return player_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
    }, player_typeof(o);
}
function player_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function player_objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? player_ownKeys(Object(t), !0).forEach(function (r) {
            player_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : player_ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function player_classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function player_defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, player_toPropertyKey(o.key), o);
    }
}
function player_createClass(e, r, t) {
    return r && player_defineProperties(e.prototype, r), t && player_defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function player_defineProperty(e, r, t) {
    return (r = player_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function player_toPropertyKey(t) {
    var i = player_toPrimitive(t, 'string');
    return 'symbol' == player_typeof(i) ? i : i + '';
}
function player_toPrimitive(t, r) {
    if ('object' != player_typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != player_typeof(i))
            return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}


















var index = 0;
var instances = [];
var XPlayer = function () {
    function XPlayer(options) {
        var _this = this;
        player_classCallCheck(this, XPlayer);
        player_defineProperty(this, 'resize', function () {
            if (_this.controller.thumbnails) {
                _this.controller.thumbnails.resize(_this.video.videoHeight / _this.video.videoWidth, _this.template.barWrap.offsetWidth);
            }
            _this.events.trigger('resize');
        });
        this.options = js_options(player_objectSpread({ preload: options.video.type === 'webtorrent' ? 'none' : 'metadata' }, options));
        if (this.options.video.quality) {
            this.qualityIndex = this.options.video.defaultQuality || 0;
            this.quality = this.options.video.quality[this.qualityIndex];
        }
        this.tran = new i18n(this.options.lang).tran;
        this.events = new events();
        this.container = this.options.container;
        this.noticeList = {};
        this.plugins = {};
        this.paused = true;
        this.container.classList.add('xplayer');
        if (this.options.live) {
            this.container.classList.add('xplayer-live');
        } else {
            this.container.classList.remove('xplayer-live');
        }
        if (js_utils.isMobile) {
            this.container.classList.add('xplayer-mobile');
        }
        this.user = new user(this);
        this.template = new template({
            container: this.container,
            options: this.options,
            index: index,
            tran: this.tran
        });
        this.bar = new bar(this.template);
        this.bezel = new bezel(this.template.bezel);
        this.fullScreen = new fullscreen(this);
        this.controller = new controller(this);
        this.setting = new js_setting(this, this.tran);
        this.timer = new timer(this);
        this.hotkey = new hotkey(this);
        this.contextmenu = new contextmenu(this);
        this.infoPanel = new info_panel(this);
        this.docClickFun = function () {
            _this.focus = false;
        };
        this.containerClickFun = function () {
            _this.focus = true;
        };
        document.addEventListener('click', this.docClickFun, true);
        this.container.addEventListener('click', this.containerClickFun, true);
        this.video = this.template.video;
        this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type);
        if (this.options.autoplay) {
            this.play();
        }
        this.moveBar = false;
        index++;
        instances.push(this);
        this.windowResize = function () {
            return js_utils.debounce(_this.resize, 300)();
        };
        window.addEventListener('resize', this.windowResize);
    }
    return player_createClass(XPlayer, [
        {
            key: 'seek',
            value: function seek(time) {
                time = Math.max(time, 0);
                if (this.video.duration) {
                    time = Math.min(time, this.video.duration);
                }
                this.video.currentTime = time;
                this.bar.set('played', time / this.video.duration, 'width');
                this.template.ptime.innerHTML = js_utils.secondToTime(time);
            }
        },
        {
            key: 'play',
            value: function play(fromNative) {
                var _this2 = this;
                this.paused = false;
                if (this.video.paused && !js_utils.isMobile) {
                    this.bezel['switch'](icons.play);
                }
                this.template.playButton.innerHTML = icons.pause;
                this.template.mobilePlayButton.innerHTML = icons.pause;
                if (!fromNative) {
                    var playedPromise = src.resolve(this.video.play());
                    playedPromise['catch'](function () {
                        _this2.pause();
                    }).then(function () {
                    });
                }
                this.timer.enable('loading');
                this.container.classList.remove('xplayer-paused');
                this.container.classList.add('xplayer-playing');
                if (this.options.mutex) {
                    for (var i = 0; i < instances.length; i++) {
                        if (this !== instances[i]) {
                            instances[i].pause();
                        }
                    }
                }
            }
        },
        {
            key: 'pause',
            value: function pause(fromNative) {
                this.paused = true;
                this.container.classList.remove('xplayer-loading');
                if (!this.video.paused && !js_utils.isMobile) {
                    this.bezel['switch'](icons.pause);
                }
                this.template.playButton.innerHTML = icons.play;
                this.template.mobilePlayButton.innerHTML = icons.play;
                if (!fromNative) {
                    this.video.pause();
                }
                this.timer.disable('loading');
                this.container.classList.remove('xplayer-playing');
                this.container.classList.add('xplayer-paused');
            }
        },
        {
            key: 'switchVolumeIcon',
            value: function switchVolumeIcon() {
                if (this.volume() >= 0.95) {
                    this.template.volumeIcon.innerHTML = icons.volumeUp;
                } else if (this.volume() > 0) {
                    this.template.volumeIcon.innerHTML = icons.volumeDown;
                } else {
                    this.template.volumeIcon.innerHTML = icons.volumeOff;
                }
            }
        },
        {
            key: 'volume',
            value: function volume(percentage, nostorage) {
                percentage = parseFloat(percentage);
                if (!isNaN(percentage)) {
                    percentage = Math.max(percentage, 0);
                    percentage = Math.min(percentage, 1);
                    this.bar.set('volume', percentage, 'width');
                    var formatPercentage = ''.concat((percentage * 100).toFixed(0), '%');
                    this.template.volumeBarWrapWrap.dataset.balloon = formatPercentage;
                    if (!nostorage) {
                        this.user.set('volume', percentage);
                    }
                    this.video.volume = percentage;
                    if (this.video.muted) {
                        this.video.muted = false;
                    }
                    this.switchVolumeIcon();
                }
                return this.video.volume;
            }
        },
        {
            key: 'toggle',
            value: function toggle() {
                if (this.video.paused) {
                    this.play();
                } else {
                    this.pause();
                }
            }
        },
        {
            key: 'on',
            value: function on(name, callback) {
                this.events.on(name, callback);
            }
        },
        {
            key: 'switchVideo',
            value: function switchVideo(video) {
                this.pause();
                this.video.poster = video.poster ? video.poster : '';
                this.video.src = video.url;
                this.initMSE(this.video, video.type || 'auto');
            }
        },
        {
            key: 'initMSE',
            value: function initMSE(video, type) {
                var _this3 = this;
                this.type = type;
                if (this.options.video.customType && this.options.video.customType[type]) {
                    if (Object.prototype.toString.call(this.options.video.customType[type]) === '[object Function]') {
                        this.options.video.customType[type](this);
                    } else {
                        console.error('Illegal customType: '.concat(type));
                    }
                } else {
                    if (this.type === 'auto') {
                        if (/m3u8(#|\?|$)/i.exec(video.src)) {
                            this.type = 'hls';
                        } else if (/.flv(#|\?|$)/i.exec(video.src)) {
                            this.type = 'flv';
                        } else if (/.mpd(#|\?|$)/i.exec(video.src)) {
                            this.type = 'dash';
                        } else {
                            this.type = 'normal';
                        }
                    }
                    if (this.type === 'hls' && (video.canPlayType('application/x-mpegURL') || video.canPlayType('application/vnd.apple.mpegURL'))) {
                        this.type = 'normal';
                    }
                    switch (this.type) {
                    case 'hls':
                        if (window.Hls) {
                            if (window.Hls.isSupported()) {
                                var options = this.options.pluginOptions.hls;
                                var hls = new window.Hls(options);
                                this.plugins.hls = hls;
                                hls.loadSource(video.src);
                                hls.attachMedia(video);
                                this.events.on('destroy', function () {
                                    hls.destroy();
                                    delete _this3.plugins.hls;
                                });
                            } else {
                                this.notice('Error: Hls is not supported.');
                            }
                        } else {
                            this.notice('Error: Can\'t find Hls.');
                        }
                        break;
                    case 'flv':
                        if (window.flvjs) {
                            if (window.flvjs.isSupported()) {
                                var flvPlayer = window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource || {}, {
                                    type: 'flv',
                                    url: video.src
                                }), this.options.pluginOptions.flv.config);
                                this.plugins.flvjs = flvPlayer;
                                flvPlayer.attachMediaElement(video);
                                flvPlayer.load();
                                this.events.on('destroy', function () {
                                    flvPlayer.unload();
                                    flvPlayer.detachMediaElement();
                                    flvPlayer.destroy();
                                    delete _this3.plugins.flvjs;
                                });
                            } else {
                                this.notice('Error: flvjs is not supported.');
                            }
                        } else {
                            this.notice('Error: Can\'t find flvjs.');
                        }
                        break;
                    case 'dash':
                        if (window.dashjs) {
                            var dashjsPlayer = window.dashjs.MediaPlayer().create().initialize(video, video.src, false);
                            var _options = this.options.pluginOptions.dash;
                            dashjsPlayer.updateSettings(_options);
                            this.plugins.dash = dashjsPlayer;
                            this.events.on('destroy', function () {
                                window.dashjs.MediaPlayer().reset();
                                delete _this3.plugins.dash;
                            });
                        } else {
                            this.notice('Error: Can\'t find dashjs.');
                        }
                        break;
                    case 'webtorrent':
                        if (window.WebTorrent) {
                            if (window.WebTorrent.WEBRTC_SUPPORT) {
                                this.container.classList.add('xplayer-loading');
                                var _options2 = this.options.pluginOptions.webtorrent;
                                var client = new window.WebTorrent(_options2);
                                this.plugins.webtorrent = client;
                                var torrentId = video.src;
                                video.src = '';
                                video.preload = 'metadata';
                                video.addEventListener('durationchange', function () {
                                    return _this3.container.classList.remove('xplayer-loading');
                                }, { once: true });
                                client.add(torrentId, function (torrent) {
                                    var file = torrent.files.find(function (file) {
                                        return file.name.endsWith('.mp4');
                                    });
                                    file.renderTo(_this3.video, {
                                        autoplay: _this3.options.autoplay,
                                        controls: false
                                    });
                                });
                                this.events.on('destroy', function () {
                                    client.remove(torrentId);
                                    client.destroy();
                                    delete _this3.plugins.webtorrent;
                                });
                            } else {
                                this.notice('Error: Webtorrent is not supported.');
                            }
                        } else {
                            this.notice('Error: Can\'t find Webtorrent.');
                        }
                        break;
                    }
                }
            }
        },
        {
            key: 'initVideo',
            value: function initVideo(video, type) {
                var _this4 = this;
                this.initMSE(video, type);
                this.on('durationchange', function () {
                    if (video.duration !== 1 && video.duration !== Infinity) {
                        _this4.template.dtime.innerHTML = js_utils.secondToTime(video.duration);
                    }
                });
                this.on('progress', function () {
                    var percentage = video.buffered.length ? video.buffered.end(video.buffered.length - 1) / video.duration : 0;
                    _this4.bar.set('loaded', percentage, 'width');
                });
                this.on('error', function () {
                    if (!_this4.video.error) {
                        return;
                    }
                    _this4.tran && _this4.notice && _this4.type !== 'webtorrent' && _this4.notice(_this4.tran('video-failed'), undefined, undefined, 'video-failed');
                });
                this.on('ended', function () {
                    _this4.bar.set('played', 1, 'width');
                    if (!_this4.setting.loop) {
                        _this4.pause();
                    } else {
                        _this4.seek(0);
                        _this4.play();
                    }
                });
                this.on('play', function () {
                    if (_this4.paused) {
                        _this4.play(true);
                    }
                });
                this.on('pause', function () {
                    if (!_this4.paused) {
                        _this4.pause(true);
                    }
                });
                this.on('timeupdate', function () {
                    if (!_this4.moveBar) {
                        _this4.bar.set('played', _this4.video.currentTime / _this4.video.duration, 'width');
                    }
                    _this4.template.ptime.innerHTML = js_utils.secondToTime(_this4.video.currentTime);
                });
                var _loop = function _loop(i) {
                    video.addEventListener(_this4.events.videoEvents[i], function (e) {
                        _this4.events.trigger(_this4.events.videoEvents[i], e);
                    });
                };
                for (var i = 0; i < this.events.videoEvents.length; i++) {
                    _loop(i);
                }
                this.volume(this.user.get('volume'), true);
            }
        },
        {
            key: 'switchQuality',
            value: function switchQuality(index) {
                var _this5 = this;
                index = typeof index === 'string' ? parseInt(index) : index;
                if (this.qualityIndex === index || this.switchingQuality) {
                    return;
                } else {
                    this.prevIndex = this.qualityIndex;
                    this.qualityIndex = index;
                }
                this.switchingQuality = true;
                this.quality = this.options.video.quality[index];
                var paused = this.video.paused;
                this.video.pause();
                var videoHTML = video_default()({
                    temp: true,
                    poster: null,
                    screenshot: this.options.screenshot,
                    preload: 'auto',
                    url: this.quality.url
                });
                var videoEle = new DOMParser().parseFromString(videoHTML, 'text/html').body.firstChild;
                this.template.videoWrap.insertBefore(videoEle, this.template.videoWrap.getElementsByTagName('div')[0]);
                this.prevVideo = this.video;
                this.video = videoEle;
                this.initVideo(this.video, this.quality.type || this.options.video.type);
                this.seek(this.prevVideo.currentTime);
                this.notice(''.concat(this.tran('switching-quality').replace('%q', this.quality.name)), -1, undefined, 'switch-quality');
                this.events.trigger('quality_start', this.quality);
                this.on('canplay', function () {
                    if (_this5.prevVideo) {
                        if (_this5.video.currentTime !== _this5.prevVideo.currentTime) {
                            _this5.seek(_this5.prevVideo.currentTime);
                            return;
                        }
                        _this5.template.videoWrap.removeChild(_this5.prevVideo);
                        _this5.video.classList.remove('xplayer-video-temp');
                        if (!paused) {
                            _this5.video.play();
                        }
                        _this5.prevVideo = null;
                        _this5.notice(''.concat(_this5.tran('switched-quality').replace('%q', _this5.quality.name)), undefined, undefined, 'switch-quality');
                        _this5.switchingQuality = false;
                        _this5.events.trigger('quality_end');
                    }
                });
                this.on('error', function () {
                    if (!_this5.video.error) {
                        return;
                    }
                    if (_this5.prevVideo) {
                        _this5.template.videoWrap.removeChild(_this5.video);
                        _this5.video = _this5.prevVideo;
                        if (!paused) {
                            _this5.video.play();
                        }
                        _this5.qualityIndex = _this5.prevIndex;
                        _this5.quality = _this5.options.video.quality[_this5.qualityIndex];
                        _this5.noticeTime = setTimeout(function () {
                            _this5.events.trigger('notice_hide');
                        }, 3000);
                        _this5.prevVideo = null;
                        _this5.switchingQuality = false;
                    }
                });
            }
        },
        {
            key: 'notice',
            value: function notice(text) {
                var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
                var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.8;
                var id = arguments.length > 3 ? arguments[3] : undefined;
                var oldNoticeEle;
                if (id) {
                    oldNoticeEle = document.getElementById('xplayer-notice-'.concat(id));
                    if (oldNoticeEle) {
                        oldNoticeEle.innerHTML = text;
                    }
                    if (this.noticeList[id]) {
                        clearTimeout(this.noticeList[id]);
                        this.noticeList[id] = null;
                    }
                }
                if (!oldNoticeEle) {
                    var notice = template.NewNotice(text, opacity, id);
                    this.template.noticeList.appendChild(notice);
                    oldNoticeEle = notice;
                }
                this.events.trigger('notice_show', oldNoticeEle);
                if (time > 0) {
                    this.noticeList[id] = setTimeout(function (e, dp) {
                        return function () {
                            e.addEventListener('animationend', function () {
                                dp.template.noticeList.removeChild(e);
                            });
                            e.classList.add('remove-notice');
                            dp.events.trigger('notice_hide');
                            dp.noticeList[id] = null;
                        };
                    }(oldNoticeEle, this), time);
                }
            }
        },
        {
            key: 'speed',
            value: function speed(rate) {
                this.video.playbackRate = rate;
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                window.removeEventListener('resize', this.windowResize);
                instances.splice(instances.indexOf(this), 1);
                this.pause();
                document.removeEventListener('click', this.docClickFun, true);
                this.container.removeEventListener('click', this.containerClickFun, true);
                this.fullScreen.destroy();
                this.hotkey.destroy();
                this.contextmenu.destroy();
                this.controller.destroy();
                this.timer.destroy();
                this.video.src = '';
                this.container.innerHTML = '';
                this.events.trigger('destroy');
            }
        }
    ], [{
            key: 'version',
            get: function get() {
                return "1.0.2";
            }
        }]);
}();
/* harmony default export */ const js_player = (XPlayer);
;// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ const src_0 = (js_player);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});