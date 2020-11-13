const router = require("express").Router();
const Schema = require("../Models");

// Getting the events by user
router.get("/", (req, res) => {
  Schema.events
    .find({
      username: req.user.username,
    })
    .then((events) => res.json(events));
});
// Creating an event by user
router.post("/create", (req, res) => {
  const newEvent = new Schema.events({
    username: req.user.username,
    title: req.body.title,
    schedules: req.body.schedules,
    duration: req.body.duration,
  });
  newEvent
    .save()
    .then((message) => res.json(message))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
