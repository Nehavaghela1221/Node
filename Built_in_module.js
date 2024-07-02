var http = require('http');

http.createServer(function (req, res) {
  
  console.log('hello from console');
  /*
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! sdasdasdas');
  */
}).listen(2112);