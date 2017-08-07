let express = require('express')
let engine = require('ejs-locals')
let app = express()

// Configuration server'file
require('./config/express.js')(app, express, engine)

// Routes file
require('./config/routes.js')(app)
