const router = require('express').Router()
const Schema = require('../Models')

// Getting all the users
router.get('/', async (req, res) => {
    try {
        const users = await Schema.users.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
})
// Get a user by user username when login
router.get('/:username', (req, res) => {
    Schema.users.findOne({ username: req.params.username })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
})
module.exports = router
