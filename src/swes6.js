(function() {
  if ('serviceWorker' in window.navigator) {
    window.console.log(window.navigator.serviceWorker.controller);
    window.navigator.serviceWorker.register('swes6-worker.js', {scope: 'es6/'}).then(function() {
      window.console.info('SWES6 - Service worker registration succeeded.');
    }).catch(function(err) {
      window.console.warn('SWES6 - Service worker registration failed.');
      window.console.error(err);
    });
  } else {
    window.console.warn('SWES6 - Service worker not availible.');
  }
}());
