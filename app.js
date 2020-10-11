
const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')

//const queries = require('./queries')

const app = express()
const connection = require('./connection')
const port = 4002


// Controllers

const homeController = require('./controllers/homeController')
const searchController = require('./controllers/searchController')
const showCustomerController = require('./controllers/showCustomerController')
const addClientController = require('./controllers/addClientController')
const storeClientController = require('./controllers/storeClientController')

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', homeController)

app.post('/search', searchController)

app.get('/customers/:id', showCustomerController)

app.get('/clients/addclient', addClientController)
app.post('/clients/register', storeClientController)
// Listen the port for the app

app.listen(port)
