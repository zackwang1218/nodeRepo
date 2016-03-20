var http = require('http');
var url = ' ';
var req = http.get(url, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
        console.log(data);
    })
})