'use strict'

/******************
TEST THE SERVER (basic test)
******************/

// Import some dependencies
let server = require('../server'),
    assert = require('assert'),
    http = require('http')

let port = process.env.PORT || 8080

// Launch the server file, listening on 8080
describe('server', function () {
  before(function () {
    server.listen(port, function(){
      console.log("listening on port " + port)
    })
  })
  after(function () {
    server.close()
  })
})
