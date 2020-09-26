const mongoose = require('mongoose')
const schema = mongoose.Schema

const clientSchema = new schema({
    name: String,
    address: String,
    phone: String
})

const Client = mongoose.model('client', clientSchema)

module.exports = Client
