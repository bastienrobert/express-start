'use strict'

/******************
TEST THE SERVER (basic test)
******************/

// Import some dependencies
let server = require('../server'),
    assert = require('assert'),
    http = require('http')

// Launch the server file, listening on 8080
describe('server', function () {
  before(function () {
    server.listen(8080)
  })

  after(function () {
    server.close()
  })
})

// Test if a request to '/' return 200 code
describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:8080', function (res) {
      assert.equal(200, res.statusCode)
      done()
    })
  })
})
