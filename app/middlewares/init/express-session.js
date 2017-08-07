module.exports = function(app){
  // Import session pkg
  let session = require('express-session')
  app.use(session({
    secret: 'please set a secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
  }))

}
