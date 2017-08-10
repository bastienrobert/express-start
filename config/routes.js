module.exports = function(app){

  let controllers = require(global.controllers)

  app.get('/', controllers.application.index)
  app.post('/', controllers.application.flash)

  // app.post('/', function(req, res){
  //   req.flash('error', 'New error flash message asked')
  //   res.redirect('/')
  // })

}
