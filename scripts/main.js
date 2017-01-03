(function() {
  'use strict';

  // Start Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
  }
})();
