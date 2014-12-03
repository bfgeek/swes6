(function() {
  if ('serviceWorker' in navigator) {
    document.write('<script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>');
    navigator.serviceWorker.register('swes6-worker.js', {scope: ''}).then(function() {
      console.info('SWES6 - Service worker registration succeeded.');
    }).catch(function(err) {
      console.warn('SWES6 - Service worker registration failed.');
      console.error(err);
    });
  } else {
    console.warn('SWES6 - Service worker not availible.');
  }
}());
