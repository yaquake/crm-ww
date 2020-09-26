const Client = require('../models/client')

module.exports = async (req, res) => {
    await Client.find({name: {$regex: req.body.name, $options: 'i'}}, (error, clients) => {
        res.render('index', { clients })
    })
}
