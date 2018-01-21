var assert = require('assert')
var CountStream = require('./CountStream')
var countStream = new CountStream('example')
var fs = require('fs')
var passed = 0

countStream.on('total', function (count) {
  assert.equal(count, 3)
  passed++
})

fs.createReadStream('./sample.txt').pipe(countStream)

process.on('exit', function () {
  console.log('Assertion passed:', passed)
})