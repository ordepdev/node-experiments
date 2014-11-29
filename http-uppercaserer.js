var http = require('http')
var map  = require('through2-map')

var server = http.createServer(function (req, res) {
	if (req.method !== 'POST') return
	req.pipe(map(function (data) {
	  return data.toString().toUpperCase()
	})).pipe(res)
})

server.listen(8000)
