// create route for a session
const router = require("express").Router();
const Schema = require("../Models");

// Getting the sessions by bookingId (In Bookings - Side Bar)
router.get("/", (req, res) => {
  Schema.sessions
    .find({
      bookingId: req.body.bookingId,
    })
    .then((sessions) => res.json(sessions));
});

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

// Deleting the sessions by the booking id
router.delete("/delete", async (req, res) => {
  await Schema.sessions
    .findOneAndDelete({
      bookingId: req.body.bookingId,
    })
    .exec((err, post) => {
      if (err)
        return res.status(500).json({
          code: 500,
          message: "There was an error deleting the post",
          error: err,
        });
      res
        .status(200)
        .json({ code: 200, message: "Post deleted", deletedPost: post });
    });
});

// Deleting the sessions by the _id
router.delete("/delete/:id", async (req, res) => {
  await Schema.sessions.findByIdAndRemove(
    { _id: req.params.id },
    (err, post) => {
      if (err)
        return res.status(500).json({
          code: 500,
          message: "There was an error deleting the post",
          error: err,
        });
      res
        .status(200)
        .json({ code: 200, message: "Post deleted", deletedPost: post });
    }
  );
});

// Editing/Updataing the sessions by the _id
router.put("/update/:id", async (req, res) => {
  await Schema.sessions.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        day: req.body.day,
        month: req.body.month,
        year: req.body.year,
        hour: req.body.hour,
        minutes: req.body.minutes,
      },
    },
    (err, post) => {
      if (err)
        return res.status(500).json({
          code: 500,
          message: "There was an error updating the post",
          error: err,
        });
      res.status(200).json({
        code: 200,
        message: "Post updated",
        deletedPost: post,
      });
    }
  );
});

module.exports = router;
