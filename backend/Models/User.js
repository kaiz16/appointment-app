const mongoose = require('mongoose')
// Constructing the model of user schema.
const users = mongoose.model('Users', 
    new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, min: 12, max: 100 },
        email_verified: { type: Boolean, default: false}
    })
)
// Exporting the user model.
module.exports = users