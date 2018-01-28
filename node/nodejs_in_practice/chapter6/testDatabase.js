var Database = require('./Database')
var database = new Database('./test.db')
database.on('load', function () {
  database.set('bar', 'test bar', function (err) {
    if (err) return console.error(err)
    console.log(database.get('bar'))
  })
})