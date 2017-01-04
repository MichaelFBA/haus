export function ConditionallyLoadPolyfills() {
    //Conditionally load webcomponents polyfill (if needed).
    var webComponentsSupported = (
        'registerElement' in document &&
        'import' in document.createElement('link') &&
        'content' in document.createElement('template'));

    if (!webComponentsSupported) {
        var script = document.createElement('script');
        script.async = true;
        script.src = './scripts/webcomponents-lite.min.js';
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
}
