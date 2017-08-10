function ActiveController() {

  let fs = require('fs'),
      path = require('path'),
      camelize = require(root_path + '/lib/camelize'),
      pluralize = require('pluralize'),
      models = require(root_path + '/app/models/'),
      controllers = {}

  fs.readdirSync(root_path + '/app/controllers/')
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js')
    })
    .forEach(function(file) {
      var controllerPath = path.join(root_path + '/app/controllers/', file)
      var controllerName = camelize(pluralize.singular(
        path.basename(controllerPath)
            .split('_')
            .slice(0, -1)
            .join(' ')
      ))

      let model = models[controllerName]

      if (typeof(model) != 'undefined') {
        controllers[controllerName] = [
          require(controllerPath),
          require(model)
        ]
      } else {
        controllers[controllerName] = require(controllerPath)
      }

    })
    return controllers

}


module.exports = ActiveController()
