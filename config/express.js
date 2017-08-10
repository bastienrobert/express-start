module.exports = function(app, express, engine){

  app.engine('ejs', engine)
  app.set('views', 'app/views')
  app.set('view engine', 'ejs')

  app.use(express.static('public/assets'))

  if (process.env.NODE_ENV == "production") {
    app.listen(80)
  } else {
    app.listen(8080)
  }

}
