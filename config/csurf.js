module.exports = function(app){
  let bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      csrf = require('csurf')

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(csrf({
    cookie: true
  }))
}
