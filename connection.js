const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@127.0.0.1:27017/warmwindows`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Connected to db')
})

connection.on('disconnected', () => {
    console.log('Disconnected from db')
})

connection.on('error', (err) => {
    console.log(err)
})

connection.on('SIGINT', () => {
    connection.close(() => {
        console.log('Connection closed due to process termination')
    })
})


module.exports = connection 
