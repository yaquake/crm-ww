const Client = require('../models/client')

module.exports = async (req, res) => {
    await Client.findById(req.params.id, (error, client) => {
        res.render('customer', { client })
    })
}
