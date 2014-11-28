var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var data = {};
    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query.iso;
    
    if (path === '/api/parsetime') {
        var date = new Date(query);
        data.hour = date.getHours();
        data.minute = date.getMinutes();
        data.second = date.getSeconds();
    } else if (path === '/api/unixtime') {
        data.unixtime = Date.parse(query);
    }

    if (data) { 
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(data));
        res.end();
    } else {
        res.writeHead(400);
        res.end();
    }
});

server.listen(8000);
