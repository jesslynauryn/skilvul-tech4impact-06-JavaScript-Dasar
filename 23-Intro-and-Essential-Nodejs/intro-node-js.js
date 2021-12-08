var http = require('http');
var server = http.createServer(function(req, res){
    if (req.url === "/about") {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write("Welcome to about us page");
        res.end();

    } else if (req.url === "/contact"){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write("Welcome to contact us page");
        res.end();
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write("Hello World!");
        res.end();
    }
});

server.listen(8000);