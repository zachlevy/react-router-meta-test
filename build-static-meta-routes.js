console.log("configure-static-routes");

var fs = require('fs');
var replace = require('stream-replace')
var routes = require('./config/static-meta-routes')

routes.forEach(function(route, index) {
  fs.createReadStream('build/index.html').pipe(
    replace('</head>', route.metaHtml + '</head>')
  ).pipe(
    fs.createWriteStream(
      'build' + route.url + 'index.html'
    )
  );
})
