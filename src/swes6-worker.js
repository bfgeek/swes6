self.importScripts('https://google.github.io/traceur-compiler/bin/traceur.js');
var JS_REGEXP = /\.js$/;

self.onfetch = function(evt) {
  console.log(evt);
  if (JS_REGEXP.test(new URL(evt.request.url).pathname)) {
    evt.respondWith(fetch(evt.request.clone()).then(function(resp) {
      return resp.text().then(function(txt) {
        var c = new traceur.Compiler();
        var str = c.compile(txt);
        return new Response(
            str, {'headers': {'Content-Type': 'application/javascript'}});
      });
    }));
  } else {
    console.log('default!');
  }
}.bind(this);
