"use strict";

var router = require('express').Router();

var Schema = require('../Models'); // Getting the events by user


router.get('/', function (req, res) {
  Schema.events.find({
    username: req.user.username
  }).then(function (events) {
    return res.json(events);
  });
}); // Creating an event

router.post('/create', function (req, res) {
  var newEvent = new Schema.events({
    username: req.user.username,
    title: req.body.title,
    schedules: req.body.schedules,
    duration: req.body.duration
  });
  newEvent.save().then(function (message) {
    return res.json(message);
  })["catch"](function (err) {
    return res.status(400).json(err);
  });
});
module.exports = router;