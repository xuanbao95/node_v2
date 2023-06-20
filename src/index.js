const express = require('express')
const exphbs  = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000


const route = require('./routes')

const db = require('./config/db')


//connect db
db.connect()

app.engine('hbs',exphbs.engine({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');

app.use(express.static( path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'resource/views')); 


route(app)


app.use(morgan('combined'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
// route init

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})