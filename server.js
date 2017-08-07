let express = require('express')
let engine = require('ejs-locals')
let app = express()

// Configuration server'file
require('./config/express')(app, express, engine)

// Routes file
require('./config/routes')(app)


// Middleware import
require('./app/middlewares/init/express-session')(app)
