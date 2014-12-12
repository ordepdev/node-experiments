var http = require('http'),
    path = require('path'),
    url  = require('url'),
    fs   = require('fs');

var server = http.createServer(function (req, res) {
    var filePath = path.join(__dirname, url.parse(req.url).pathname);
    fs.exists(filePath, function (exists) {
        if (!exists) {
            res.writeHead(404);
            res.end('404 Not Found \n');
        } else {
            fs.stat(filePath, function (err, stat) {
                if (stat.isDirectory()) {
                    res.writeHead(403);
                    res.end('403 Forbidden');
                } else {
                    res.writeHead(200);
                    fs.createReadStream(filePath).pipe(res);
                }
            });
        }
    });
}).listen(3000);