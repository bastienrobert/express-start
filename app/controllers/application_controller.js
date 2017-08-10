let helper = require(global.helpers).application

module.exports = {

  test() {
    console.log('application controller, test method')
    console.log(helper.test())
  }

}
