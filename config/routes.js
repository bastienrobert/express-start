require('express-session')

module.exports = function(app){

  app.get('/', function(request, response){
    response.render('pages/index')
  })

}
