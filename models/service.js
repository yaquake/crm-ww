const mongoose = require('mongoose')
const schema = mongoose.Schema

const serviceSchema = new schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Client',
		required: true },
	
	dateOfService: {
		type: Date,
		default: new Date(),
		required: [true, 'Please provide a problem']},
	
	problem: {
		type: String,
		required: [true, 'Please provide a problem']},
	
	resolution: {
		type: String},
	
	technician: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Staff',
		required: true },
	
	statusOfService: {
		type: Boolean,
		required: [true, 'Please provide status of the service']}

})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service
