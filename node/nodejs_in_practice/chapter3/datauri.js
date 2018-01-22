var fs = require('fs')
var mine = 'image/png'
var encoding = 'base64'
var data = fs.readFileSync('./0.png').toString(encoding)

var uri = `data:${mine};${encoding},${data}`

var source = uri.split(',')[1]

var buf = Buffer(data, encoding)

fs.writeFileSync('./copy.png', buf)
