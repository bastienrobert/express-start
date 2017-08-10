let helper = require(global.helpers).application

module.exports = {

  // GET index
  index(req, res) {
    console.log('application controller, test method')
    console.log(helper.test())

    res.format({
      text: function(){
        res.send('hey')
      },
      html: function(){
        res.render('pages/index')
      },
      json: function(){
        res.send({ message: 'hey' })
      }
    })

  },

  // POST index
  flash(req, res) {
    req.flash('error', 'New error flash message asked')
    res.redirect('/')
  }

}
