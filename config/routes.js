module.exports = function(app){

  let controllers = require(global.controllers)

  app.get('/', controllers.application.index)
  app.post('/', controllers.application.flash)

}
