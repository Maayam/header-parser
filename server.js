//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');

var server = http.createServer(function(req, res){
  var result = {
    "ipAddress": req.headers['x-forwarded-for'],
    "language": req.headers['accept-language'].split(',')[0],
    "software": req.headers['user-agent']
  };
  res.end(JSON.stringify(result));
});

server.listen(process.env.PORT, process.env.IP);
