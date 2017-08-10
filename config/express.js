module.exports = function(app, express, engine){

  app.engine('ejs', engine)
  app.set('views', 'app/views')
  app.set('view engine', 'ejs')

  app.use(express.static('public/assets'))

  let port = process.env.PORT || 8080
  app.listen(port)

}
