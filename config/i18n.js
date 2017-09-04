module.exports = function(app){
  let i18n = require("i18n")
  i18n.configure({
    locales:['en', 'fr'],
    defaultLocale: 'en',
    objectNotation: true,
    directory: __dirname + '/locales'
  })
   app.use(i18n.init)
}
