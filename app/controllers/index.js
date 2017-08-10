'use strict';

module.exports = function() {

  let fs = require('fs'),
      path = require('path'),
      camelize = require(root_path + '/lib/camelize'),
      basename = path.basename(module.filename),
      pluralize = require('pluralize'),
      controllers = {}

  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(function(file) {
      var controllerPath = path.join(__dirname, file)
      var controllerName = camelize(pluralize.singular(
        path.basename(controllerPath)
            .split('_')
            .slice(0, -1)
            .join(' ')
      ))
      controllers[controllerName] = require(controllerPath)
    })

    return controllers

}
