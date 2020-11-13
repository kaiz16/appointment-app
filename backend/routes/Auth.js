const router = require("express").Router();
const Schema = require("../Models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./verifyToken");

// login route
router.post("/login", async (req, res) => {
  const user = await Schema.users.findOne({ email: req.body.email });
  // throw error when email is wrong
  if (!user) return res.status(400).json({ error: "Email is wrong" });
  // check for password correctness
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword)
    return res.status(400).json({ error: "Password is wrong" });

  // create token
  const token = jwt.sign(
    // payload data
    {
      username: user.username,
      id: user._id,
    },
    process.env.TOKEN_SECRET
  );

  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
  });
});

router.get("/verifyToken", async (req, res) => {
  verifyToken(req, res, function() {
    res.status(200).json({ error: null, data: { token: true } });
  });
});

router.post("/register", async (req, res) => {
  const isEmailExist = await Schema.users.findOne({ email: req.body.email });

  if (isEmailExist)
    return res.status(400).json({ error: "Email already exists" });

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new Schema.users({
    username: req.body.username,
    email: req.body.email,
    password,
  });

  try {
    const savedUser = await user.save();
    res.json({ error: null, data: savedUser });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
