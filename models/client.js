const mongoose = require('mongoose')
const schema = mongoose.Schema

const clientSchema = new schema({
    	name: String,
    	address: String,
    	phone: String,
	email: String,
	quotes: [{
		type: String}]

})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client
