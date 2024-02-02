// Create a web server

var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 3000;

var server = http.createServer(function(req, res) {
  var uri = url.parse(req.url).pathname;
  var filename = __dirname + uri;

  console.log('uri:', uri);
  console.log('filename:', filename);

  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log('File not found:', filename);
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('404 Not Found\n');
      res.end();
    } else {
      console.log('File found:', filename);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, function() {
  console.log('Server started on port:', port);
});
