class ApplicationController {

  // GET index
  index(req, res) {
    console.log('application controller, test method')

    res.format({
      text: function(){
        res.send('hey, plain text !')
      },
      html: function(){
        res.render('application/home')
      },
      json: function(){
        res.send({ message: 'hey, this is a JSON' })
      }
    })

  }

  // POST index
  flash(req, res) {
    req.flash('error', 'New error flash message asked')
    res.redirect('/')
  }

}

module.exports = new ApplicationController
