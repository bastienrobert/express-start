let express = require('express')
let engine = require('ejs-locals')
let app = express()

// Get the root_path
global.root_path = require('./lib/root-path.js')()
require('dotenv').config({path: './config/local.env'})

global.controllers = root_path + '/lib/active-controller'
global.helpers = root_path + '/lib/active-helper'

// Configuration server'file
require('./config/express')(app, express, engine)

// Middleware import
require('./lib/express-session')(app) // Express session init
require('./app/middlewares/application')(app)

// Routes file
require('./config/routes')(app, express)
require('./lib/http-errors')(app, express) // Errors routes
