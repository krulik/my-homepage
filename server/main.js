var http = require('http');

var server = http.createServer(handleRequest);
server.listen(9000);


function handleRequest (req, res) {
    console.log(req.url);
}
