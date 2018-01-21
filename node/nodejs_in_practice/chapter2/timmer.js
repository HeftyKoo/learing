const whoIsFirst = function (name) {
  console.log(name)
}
setImmediate(whoIsFirst.bind(null, 'setImmediate'))
var id = setInterval(whoIsFirst.bind(null, 'setInterval'),0)
id.unref()
setTimeout(whoIsFirst.bind(null, 'setTimeout'),0)
process.nextTick(whoIsFirst.bind(null, 'nextTick'))