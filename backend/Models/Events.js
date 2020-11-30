const mongoose = require('mongoose')
// Constructing the model of event schema.
const timeSchema = new mongoose.Schema({
    startTime: { type: String, default: "1030"},
    endTime: { type: String, default: "1730"}
})
const scheduleSchema = new mongoose.Schema({
    Monday: { type: timeSchema, default: () => ({})},
    Tuesday: { type: timeSchema, default: () => ({})},
    Wednesday: { type: timeSchema, default: () => ({})},
    Thursday: { type: timeSchema, default: () => ({})},
    Friday: { type: timeSchema, default: () => ({})},
    Saturday: { type: timeSchema, default: () => ({})},
    Sunday: { type: timeSchema, default: () => ({})},
})
const events = mongoose.model('Events', 
    new mongoose.Schema({
        username: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, default: '' },
        meetingType:  { type: String, validate: {
                validator: function(v){
                    return v === 'In Person' || v === 'Online'
                },
            },
            default: 'In Person'
        },
        schedules: { type: scheduleSchema, default: () => ({}) },
        duration: { type: Number, default: 30, min: 0, max: 60}
    })
)


// Exporting the user model.
module.exports = events