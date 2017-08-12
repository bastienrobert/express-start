let express = require('express')
let engine = require('ejs-locals')
let app = express()

// Get the root_path
global.root_path = require('./lib/root-path.js')()

// Get locals & globals vars
require('dotenv').config({path: './config/local.env'}) // locals
require('./lib/globals')() // globals

// Configuration server'file
require('./config/express')(app, express, engine)

// Middleware import
require('./lib/express-session')(app) // Express session init
require('./app/middlewares/application')(app)

// Routes file
require('./config/routes')(app, express)
require('./lib/http-errors')(app, express) // Errors routes
