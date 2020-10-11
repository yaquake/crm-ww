const connection = require('./connection')
import { ObjectId } from './connection'



async function findUsers (da) {
    

    return new Promise((resolve, reject) => {
        connection.db.collection('clients', (err, collection) => {
            collection.find({ 'name': {$regex: `${da}`, $options: 'i' } }).toArray((err, data) => {
                resolve(data)
            })
            })
            
    })


    
    
}

async function findById (id) {
    return new Promise((resolve, reject) => {
        connection.db.collection('clients', (err, collection) => {
            collection.find({'_id': ObjectId(`${id}`)}).toArray((err, data) =>  {
                resolve(data)
            })
        
    })
})
}


module.exports = { 
    findUsers: findUsers,
    findById: findById
 }