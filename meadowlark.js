// conventional to add imports at top of file - not necessary
// ./ indicates to Node not to look in node_modules dir
const fortune = require('./lib/fortune')

const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
}))
// configures Express to use view engine by default
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

// don't have to normalize url b/c this is provided by Express

app.use(express.static(__dirname + '/public'))

// home page
app.get('/', (req, res) => res.render('home'))
// view engine returns content type of text/html
// and status code of 200 by default

// About page
app.get('/about', (req, res) => {
	res.render('about', { fortune: fortune.getFortune() })
})

// custom 404 page
app.use((req, res) => {
	res.status(404)
	res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
	console.error(err.message)
	res.status(500)
	res.render('500')
})

app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))