// create route for a session
const router = require("express").Router();
const Schema = require("../Models");

// Getting the sessions by eventsId (In Bookings - Side Bar)

// Getting the sessions by date (In Calender - Side Bar)

// Creating an session from scheduleSchema (Looping, Limit to ? Months/Years)
router.post("/create", (req, res) => {
  const newSessions = new Schema.sessions({
    bookingId: req.body.bookingId,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
    hour: req.body.hour,
    minutes: req.body.minutes,
  });
  newSessions
    .save()
    .then((message) => res.json(message))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
