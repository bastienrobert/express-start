let express = require('express')
let engine = require('ejs-locals')
let app = express()

// Get the root_path
let root_path = require('./lib/root-path.js')()

// Configuration server'file
require('./config/express')(app, express, engine)

// Middleware import
require('./app/middlewares/init/express-session')(app)
require('./app/middlewares/application')(app)

// Routes file
require('./config/routes')(app, express)
require('./lib/http-errors')(app, express) // Errors routes
