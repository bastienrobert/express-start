module.exports = function(app){

  let session = require('express-session')
  app.use(session({
    secret: 'please set a secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
  }))

  app.get('/', function(request, response){
    if (request.session.error) {
      response.locals.error = request.session.error
    }
    response.render('pages/index')
  })

  app.post('/', function(request, response){
    request.session.error = "New error flash message asked"
    response.redirect('/')
  })

}
