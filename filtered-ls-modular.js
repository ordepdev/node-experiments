var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, cb) {
  var regex = new RegExp('\\.' + ext + '$')

  fs.readdir(dir, function (err, list) {
    if (err) {
      return cb(err, null)
    }
    
    list = list.filter(function (file) {
      return regex.test(file)
    })

    return cb(null, list)
  })
}
