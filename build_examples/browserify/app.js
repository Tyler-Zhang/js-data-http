var JSData = require('js-data')
// normally this would be "var HttpAdapter = require('js-data-http')"
var HttpAdapter = require('../../')

document.getElementById('main').innerHTML = HttpAdapter.version.full

var adapter = new HttpAdapter()
var store = new JSData.DataStore()
store.registerAdapter('http', adapter, { default: true })
store.defineMapper('user')

store.find('user', 1).catch(function (err) {
  console.log(err)
})
