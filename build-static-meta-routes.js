console.log("configure-static-routes");

var fs = require('fs');
var path = require('path')
var replace = require('stream-replace')
var routes = require('./config/static-meta-routes')

routes.forEach(function(route, index) {
  fs.mkdirSync('build' + route.url)
  fs.createReadStream('build/index.html').pipe(
    replace('</head>', route.metaTags.join() + '</head>')
  ).pipe(
    fs.createWriteStream(
      'build' + route.url + 'index.html'
    )
  );
})
