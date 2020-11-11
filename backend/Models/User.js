const mongoose = require('mongoose')
// Constructing the model of user schema.
const users = mongoose.model('User', 
    new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, min: 12, max: 100 }
    })
)
// Exporting the user model.
module.exports = users