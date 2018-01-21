process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', function (text) {
  process.stderr.write(text.toUpperCase())
})