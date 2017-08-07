module.exports = function(app, express, engine){

  app.engine('ejs', engine)
  app.set('views', 'app/views')
  app.set('view engine', 'ejs')

  app.use('/assets', express.static('public'))

  app.listen(8080)

}