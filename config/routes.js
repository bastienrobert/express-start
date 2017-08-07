module.exports = function(app){

  app.get('/', function(req, res){
    res.render('pages/index')
  })

  app.post('/', function(req, res){
    req.flash('error', 'New error flash message asked')
    res.redirect('/')
  })

}
