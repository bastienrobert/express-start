module.exports = function(app){

  app.get('/', function(request, response){
    response.render('pages/index')
  })

  app.post('/', function(request, response){
    request.flash('error', 'New error flash message asked')
    response.redirect('/')
  })

}
