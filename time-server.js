var net    = require('net')
var moment = require('moment')

var server = net.createServer(function (socket) {
  var now = moment().format('YYYY-MM-DD HH:mm')
  socket.end(now + '\n')
})

server.listen(8000)