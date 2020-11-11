const mongoose = require('mongoose')
// Constructing the model of user schema.
const sessions = mongoose.model('Sessions', 
    new mongoose.Schema({
        bookingId: { type: String, required: true},
        day: { type: Number, required: true, min: 1, max: 31},
        month: { type: Number, required: true, min: 1, max: 12},
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
module.exports = sessions