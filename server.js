let express = require('express')
let engine = require('ejs-locals')
let app = express()

app.engine('ejs', engine)
app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))

app.get('/', (request, response) => {
  response.render('pages/index', {test: "Salut"})
})

app.listen(8080)
