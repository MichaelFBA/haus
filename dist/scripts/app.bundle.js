webpackJsonp([1,2],{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _polyfills = __webpack_require__(28);

(0, _polyfills.ConditionallyLoadPolyfills)();

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConditionallyLoadPolyfills = ConditionallyLoadPolyfills;
function ConditionallyLoadPolyfills() {
    //Conditionally load webcomponents polyfill (if needed).
    var webComponentsSupported = 'registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template');

    if (!webComponentsSupported) {
        var script = document.createElement('script');
        script.async = true;
        script.src = './dist/scripts/webcomponents-lite.min.js';
        document.head.appendChild(script);
    }

    // Start Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js').then(function () {
            console.log('Service Worker Registered');
        });
    }
}

/***/ }

},[103]);