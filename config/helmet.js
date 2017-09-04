module.exports = function(app){
  let helmet = require('helmet')
  app.use(helmet())
}
