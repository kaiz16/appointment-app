const router = require('express').Router()
const Schema = require('../Models')
const moment = require('moment')
// Getting the bookings by the event id
router.get('/', (req, res) => {
    Schema.bookings.find({
        eventId: req.body.id
    }).then(bookings => res.json(bookings))
})

router.post('/create', async (req, res) => {
    // const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    // const date = moment(`${req.body.year}-${req.body.month}-${req.body.day}`)
    // const weekday = date.weekday()

    // Schema.events.findById(req.body.eventId).then( event => {
    //     const e = event.schedules[weekdays[weekday]]
    //     console.log(e)
    // })

    // res.status(400)
    const newBooking = new Schema.bookings({
        eventId: req.body.eventId,
        name: req.body.name,
        email: req.body.email,
        day: req.body.day,
        month: req.body.month,
        year: req.body.year,
        hour: req.body.hour,
        minutes: req.body.minutes,
        userId: 'abc'
    })
    newBooking.save()
    .then(booking => res.json(booking))
    .catch(err => res.status(400).json(err))
})

module.exports = router

