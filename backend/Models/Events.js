const mongoose = require('mongoose')
// Constructing the model of user schema.
const setDefault = () => {
    const date = new Date
    date.setHours(10, 0)
    return date.getHours()
}

const timeSchema = new mongoose.Schema({
    startTime: { type: String, default: "1030"},
    endTime: { type: String, default: "1730"},
})
const scheduleSchema = new mongoose.Schema({
    Monday: { type: timeSchema, default: () => ({}) },
    Tuesday: { type: timeSchema, default: () => ({}) },
    Wednesday: { type: timeSchema, default: () => ({}) },
    Thursday: { type: timeSchema, default: () => ({}) },
    Friday: { type: timeSchema, default: () => ({}) }
})
const events = mongoose.model('Events', 
    new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        schedules: { type: scheduleSchema, default: () => ({}) },
        duration: { type: Number, default: 30, min: 0, max: 60}
    })
)


// Exporting the user model.
module.exports = events