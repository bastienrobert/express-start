module.exports = function(app){
  // Import session pkg
  let session = require('express-session'),
      RedisStore = require('connect-redis')(session),
      redis = require('redis'),
      client = redis.createClient()

  app.use(session({
    store: new RedisStore({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      client: client,
      ttl: 260}
    ),
    secret: 'please set a secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
  }))
  app.use(function (req, res, next) {
    if (!req.session) {
      return next(new Error('oh no')) // handle error
    }
    next() // otherwise continue
  })

}
