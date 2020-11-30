const router = require('express').Router()
const Schema = require('../Models')
const {
    getAvailableTimes
} = require('./eventHelpers')
const verifyToken = require('./verifyToken')


// Getting the events by user
router.get('/', verifyToken, (req, res) => {
    Schema.events.find({
        username: req.user.username
    }).then(events => res.json(events))
})

// Creating an event
router.post('/create', verifyToken, (req, res) => {
    const newEvent = new Schema.events({
        username: req.user.username,
        title: req.body.title,
    })
    newEvent.save()
        .then(message => res.json(message))
        .catch(err => res.status(400).json(err))
})

router.get('/:id', async (req, res) => {
    try {
        const event = await Schema.events.findOne({
            _id: req.params.id
        })

        const availableTimes = getAvailableTimes(event, req.query.day, req.query.month, req.query.year)
        res.json({
            event,
            availableTimes
        })
    } catch (error) {
        res.status(400).json(error)
    }

})

// Updating an event (used in settings page)
router.post('/update/:id', verifyToken, (req, res) => {
    Schema.events.findById(req.params.id, (err, event) => {
        if (err) {
            return res.status(400).json(err)
        }
        event.title = req.body.title
        event.description = req.body.description,
            event.duration = req.body.duration,
            event.schedules = req.body.schedules,
            event.meetingType = req.body.meetingType
        event.save((err) => {
            if (err) return res.status(400).json(err)
            res.json(event)
        })
    })
})

module.exports = router