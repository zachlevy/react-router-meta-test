console.log("configure-static-routes");

var fs = require('fs');
var path = require('path')
var replace = require('stream-replace')
var routes = require('./config/static-meta-routes')

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

routes.forEach(function(route, index) {
  // ensureDirectoryExistence('build' + route.url)
  fs.mkdirSync('build' + route.url)
  fs.createReadStream('build/index.html').pipe(
    replace('</head>', route.metaHtml + '</head>')
  ).pipe(
    fs.createWriteStream(
      'build' + route.url + 'index.html'
    )
  );
})
