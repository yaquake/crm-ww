const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcrypt')

const staffSchema = new schema({
	name: {
		type: String,
		required: [true, 'Please provide full name']},
	email: {
		type: String,
		required: [true, 'Please provide email']},
	login: {
		type: String,
		required: [true, 'Please provide login']},
	password: {
		type: String,
		required: [true, 'Please provide password']},
	position: {
		type: String,
		required: [true, 'Please provide position']}
})

staffSchema.pre('save', function(next) {
	const user = this
	bcrypt.hash(user.password, 10, (error, hash) => {
		user.password = hash
		next()
	})
})

const Staff = mongoose.model('Staff', staffSchema)

module.exports = Staff
