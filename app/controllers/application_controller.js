function ApplicationController() {
  let ActiveController = require(root_path + '/lib/active-controller.js')(),
      helper = ActiveController[0],
      model = ActiveController[1]

  function includeHelperAndModel() {
    helper != null ? require(helper) : null
    model != null ? require(model) : null
  }

  includeHelperAndModel()
}

module.exports = ApplicationController
