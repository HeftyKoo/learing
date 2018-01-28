var finder = require('./finder')

try {
  var time = process.hrtime()
  var results = finder.findSync(/.js$/, '../../..')
  var diff = process.hrtime(time)
  console.log(diff)
  console.log(results)
} catch (err) {
  console.error(err)
}

var time = process.hrtime()
finder.find(/.js$/, '../../..', function (err, results) {
  if (err) return console.error(err)
  var diff = process.hrtime(time)
  console.log(diff)
  console.log(results)
})