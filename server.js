let express = require('express')
let engine = require('ejs-locals')
let app = express()

app.engine('ejs', engine)
app.set('views', 'app/views')
app.set('view engine', 'ejs')

app.use('/assets', express.static('app/public'))

app.get('/', (request, response) => {
  response.render('pages/index', {test: "Salut"})
})

app.listen(8080)
