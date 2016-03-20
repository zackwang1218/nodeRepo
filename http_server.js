var fs = require('fs');
var http = require('http');
var portNum = 8080;

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    fs.createStream('./readme.txt').pipe(res);
    console.log('done!');
})
server.listen(portNum);