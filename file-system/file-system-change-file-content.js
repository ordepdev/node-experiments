var fs = require('fs'),
    path = require('path');

fs.open(path.resolve(__dirname, 'my-file.txt'), 'a+', function (err, fd) {
    var writeBuffer = new Buffer('7'),
        bufferOffset = 0,
        bufferLength = writeBuffer.length,
        filePosition = 10;

    fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition,
        function (err, written) {
            if (err) {
                throw err;
            }
            console.log('wrote ' + written + ' bytes');
        }
    );
});


