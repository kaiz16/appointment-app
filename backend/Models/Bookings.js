const mongoose = require('mongoose')
// Constructing the model of user schema.
const bookings = mongoose.model('Bookings', 
    new mongoose.Schema({
        eventId: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String }
    },
    {
        timestamps: true
    }
    )
)
// Exporting the user model.
module.exports = bookings