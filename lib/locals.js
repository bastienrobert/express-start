module.exports = function() {

  "use strict";

  let fs = require('fs')

  let locals = '../config/local_env.json'
  return fs.existsSync(locals) ? require(locals) : null

}
