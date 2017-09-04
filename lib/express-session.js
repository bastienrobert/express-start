module.exports = function(app){
  // Import session pkg
  let session = require('express-session'),
      RedisStore = require('connect-redis')(session),
      redis = require('redis'),
      client = require('redis').createClient(process.env.REDIS_URL);

  app.use(session({
    store: new RedisStore({client: client}),
    secret: 'please set a secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      httpOnly: true,
      domain: (process.env.HOST || 'localhost')
    }
  }))
  app.use(function (req, res, next) {
    if (!req.session) {
      return next(new Error('oh no')) // handle error
    }
    next() // otherwise continue
  })

}
