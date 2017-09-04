module.exports = function(app){

  app.use(require('./flash'))
  app.use(require('./format'))

}
