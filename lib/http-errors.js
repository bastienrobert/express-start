module.exports = function(app, express) {

  // Root options for sendFile
  let options = {
    root: 'public/',
    dotfiles: 'deny'
  }

  // Analyse the trafic
  app.get('*', function(req, res, next) {
    var err = new Error()
    err.status = 404
    next(err)
  })

  // Return to here if any error
  app.use(function(err, req, res, next) {
    if (err.status != 500) {
      res.status(err.status)
      res.sendFile('400.html', options)
    } else {
      res.status(500)
      res.sendFile('500.html', options)
    }
  })

}
