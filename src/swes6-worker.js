self.importScripts('https://google.github.io/traceur-compiler/bin/traceur.js');
var JS_REGEXP = /es6\/.*\.js$/;
var JS_MAP_REGEXP = /es6\/.*\.js\.map$/;

self.onfetch = function(evt) {
  var pathname = new URL(evt.request.url).pathname;
  if (JS_REGEXP.test(pathname)) {
    evt.respondWith(fetch(evt.request.clone()).then(function(resp) {
      return resp.text().then(function(txt) {
        var c = new traceur.Compiler();
        var str = c.compile(txt);
        return new Response(str, {'headers': {
          'Content-Type': 'application/javascript',
          'X-SourceMap': evt.request.url + '.map'
        }});
      });
    }));
  } else if (JS_MAP_REGEXP.test(pathname)) {
    evt.respondWith(fetch(evt.request.url.slice(0, -4)).then(function(resp) {
      return resp.text().then(function(txt) {
        var c = new traceur.Compiler({sourceMaps: true});
        c.compile(txt);
        return new Response(c.getSourceMap(), {'headers': {
          'Content-Type': 'application/json'
        }});
      });
    }));
  }
}.bind(this);
