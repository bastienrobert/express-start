function ActiveHelper() {

  let fs = require('fs'),
      path = require('path'),
      camelize = require(root_path + '/lib/camelize'),
      pluralize = require('pluralize'),
      helpers = {}

  fs.readdirSync(root_path + '/app/helpers/')
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js')
    })
    .forEach(function(file) {
      var helperPath = path.join(root_path + '/app/helpers/', file)
      var helperName = camelize(pluralize.singular(
        path.basename(helperPath)
            .split('_')
            .slice(0, -1)
            .join(' ')
      ))

      helpers[helperName] = require(helperPath)
    })
    return helpers

}


module.exports = ActiveHelper()
