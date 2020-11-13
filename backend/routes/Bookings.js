const router = require("express").Router();
const Schema = require("../Models");

// Getting the bookings by the event id
router.get("/", (req, res) => {
  Schema.bookings
    .find({
      eventId: req.body.eventId,
    })
    .then((bookings) => res.json(bookings));
});

router.post("/create", async (req, res) => {
  const newBooking = new Schema.bookings({
    eventId: req.body.eventId,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  newBooking
    .save()
    .then((booking) => res.json(booking))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
