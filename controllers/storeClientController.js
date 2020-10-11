const Client = require('../models/client')


module.exports = async (req, res) => {
	console.log(req.body)
	await Client.create({
		name: req.body.name,
		address: req.body.address,
		phone: req.body.phone,
		email: req.body.email,
		quotes: req.body.quotes
	
	}, (error, user) => {
	res.redirect('/')

	})

}	
