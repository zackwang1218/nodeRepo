var fs = require('fs');
var http = require('http');
var portNum = 8080;
var portNum2 = 8081;

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    fs.createReadStream('./readme.txt').pipe(res);
    console.log('done!');
})
server.listen(portNum);

var server2 = http.createServer(function(req, res){
	if (req.method ==='POST'){
		req.pipe(fs.createWriteStream(data/mydata.txt));
	}
	res.end('finished')
})
server2.listen(portNum2);
