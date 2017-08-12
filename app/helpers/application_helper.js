class ApplicationHelper {

  test() {
    return console.log('application helper, test method (called by application controller)')
  }

}

module.exports = new ApplicationHelper
