const  express = require('express')// does the same thing importing
const path = require('path')// path is used to connect pieces of location in the computer and
// figure out where things are
const bodyParser = require('body-parser')


const  indexRouter = require('./routes/index')// bringing in the content of this file

const app = express()// creates the web app server

//enabling parsing
app.use(bodyParser.urlencoded({extended:false}))// parsing simple form bodies

const staticFileLocation = path.join(__dirname,'public')// this where the static file are
app.use(express.static(staticFileLocation)) // static files are in this location and saying use this location

//the 'view' means things that will become html
//tells app where the views (HTML files or templates) are
app.set('views',path.join(__dirname,'views'))// means the path, dir__means the current location where the code is actually stored
// this codes finds whatever in views directory

app.set('view engine', 'hbs')// uses the handlebars to generate views

app.use('/', indexRouter)// this means all the requests to the app are going to be passed to indexRouter and it will have
//the code that receives the request and generates response

//start server running
const  server = app.listen(process.env.PORT|| 3000, function (){
    console.log('Server running on port', server.address().port)// this will prints message to the developer
})// means run if you are told to use specific portal
//otherwise use 3000.

