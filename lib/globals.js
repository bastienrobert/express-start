module.exports = function() {
  // Controllers and helpers path
  global.controllers = root_path + '/lib/active-controller'

  // Assets pipeline
  let assetsManifest = require(root_path + '/app/assets/config/manifest')
  Object.keys(assetsManifest).forEach(function(key) {
    global[key] = assetsManifest[key]
  })
}
