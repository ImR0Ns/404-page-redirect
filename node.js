// modules
var http = require("http");
var url = require("url");
var fs = require("fs");

// create server and display error
http.createServer(function(req, res){
    var file = url.parse(req.url, true).pathname;
    var location = "." + file;

    fs.readFile(location, function(err, data){
        if(err) {
            fs.readFile('./notFoundPage.html', (err2, data2) => {
                if (err2) throw err2;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data2);
                return res.end();
            })
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        }
    })
}).listen(8080) // localhost:8080 (8080) port to work;
