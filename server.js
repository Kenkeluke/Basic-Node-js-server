let router = require('./routing');
let http = require('http');


let handleRequest = (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    };


const server = http.createServer(router.handleRequest);
server.listen(9000, "127.0.0.1");