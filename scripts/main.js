(function() {
  'use strict';

    //Conditionally load webcomponents polyfill (if needed).
    var webComponentsSupported = (
        'registerElement' in document &&
        'import' in document.createElement('link') &&
        'content' in document.createElement('template'));

    if (!webComponentsSupported) {
        var script = document.createElement('script');
        script.async = true;
        script.src = './node_modules/webcomponents.js/webcomponents-lite.min.js';
        script.onload = finishLazyLoadingImports;
        document.head.appendChild(script);
    }

  // Start Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
  }

})();
