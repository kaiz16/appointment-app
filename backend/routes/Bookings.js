const router = require('express').Router()
const Schema = require('../Models')
const {
    getAvailableTimes
} = require('./eventHelpers')
const verifyToken = require('./verifyToken')
// Getting the bookings by the event id
router.get('/:id', verifyToken, (req, res) => {
    Schema.bookings.find({
        eventId: req.params.id
    }).then(bookings => res.json(bookings))
})

router.post('/create', async (req, res) => {
    // Find the event
    try {
        const event = await Schema.events.findById(req.body.eventId)
        if (!event) throw "Event does not exist"
        const isBookingExist = await Schema.bookings.find({
            eventId: req.body.eventId,
            email: req.body.email,
        })
        
        if (isBookingExist){
            throw "Booking already exist"
        }
        const availableTimes = getAvailableTimes(event, req.body.day, req.body.month, req.body.year)

        let hour = req.body.hour
        let minutes = req.body.minutes

        // conversions

        if (hour < 10) {
            hour = `0${req.body.hour}`
        }

        if (minutes < 10) {
            minutes = `0${req.body.minutes}`
        }

        const preferredTime = `${hour}${minutes}`
        if (!availableTimes.includes(preferredTime)) {
            throw "Not available"
        }

        const newBooking = new Schema.bookings({
            eventId: req.body.eventId,
            username: event.username,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            day: req.body.day,
            month: req.body.month,
            year: req.body.year,
            hour: req.body.hour,
            minutes: req.body.minutes
        })

        newBooking.save().then(booking => res.json(booking))
            .catch(err => res.status(401).json(err))

    } catch (error) {
        return res.status(400).json(error)
    }
})

module.exports = router