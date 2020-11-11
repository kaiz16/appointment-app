const mongoose = require('mongoose')
// Constructing the model of user schema.
const bookings = mongoose.model('Bookings', 
    new mongoose.Schema({
        eventId: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        day: { type: Number, required: true, min: 1, max: 31},
        month: { type: Number, required: true, min: 1, max: 31},
        year: { type: Number, required: true},
        hour: { type: Number, required: true, min: 0, max: 23},
        minutes: { type: Number, required: true, min: 0, max: 59},
    },
    {
        timestamps: true
    }
    )
)
// Exporting the user model.
module.exports = bookings