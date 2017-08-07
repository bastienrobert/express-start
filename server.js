let express = require('express')
let engine = require('ejs-locals')
let app = express()

// Configuration server'file
require('./config/express')(app, express, engine)

// Middleware import
require('./app/middlewares/init/express-session')(app)
require('./app/middlewares/application')(app)

// Routes file
require('./config/routes')(app)
