const router = require("express").Router();
const mongoose = require("mongoose");
const Schema = require("../Models");
const mongodb = require("mongodb");

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

// Deleting the event by the event id
router.delete("/delete", async (req, res) => {
  await Schema.events
    .deleteOne({
      _id: mongoose.Types.ObjectId(req.body.id),
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

module.exports = router;
