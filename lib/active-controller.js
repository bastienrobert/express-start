let path = require('path'),
    fs = require('fs'),
    pluralize = require('pluralize'),
    controller_name = path.basename(module.parent.filename),
    action_name = ActiveName()

function ActiveName() {
  controller_name = controller_name.split('_')[0]
  return pluralize.isPlural(controller_name) ? pluralize.singular(controller_name) : controller_name
}

function ActiveHelper() {
  helper_name = root_path + '/app/helpers/' + action_name + '_helper.js'
  return fs.existsSync(helper_name) ? helper_name : null
}

function ActiveModel() {
  model_name = root_path + '/app/models/' + action_name + '.js'
  return fs.existsSync(model_name) ? model_name : null
}

function ActiveController() {
  return [ActiveHelper(), ActiveModel()]
}

module.exports = ActiveController
