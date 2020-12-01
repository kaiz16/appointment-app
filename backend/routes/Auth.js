const router = require("express").Router();
const Schema = require("../Models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./verifyToken");

// login route
router.post("/login", async (req, res) => {
  try {
    const user = await Schema.users.findOne({
      email: req.body.email
    });

    // throw error when email is wrong
    if (!user) {
      throw 'Email is wrong'
    }

    // check for password correctness
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    
    if (!validPassword){
      throw 'Password is wrong'
    }

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

  } catch (error) {
    return res.status(400).send(error)
  }
});

router.get("/verifyToken", async (req, res) => {
  verifyToken(req, res, function () {
    res.status(200).json({
      error: null,
      data: {
        token: true
      }
    });
  });
});

router.post("/register", async (req, res) => {
  try {
    const isUsernameExist = await Schema.users.findOne({
      username: req.body.username
    });

    if (isUsernameExist) {
      throw 'Username already exist'
    }

    const isEmailExist = await Schema.users.findOne({
      email: req.body.email
    });

    if (isEmailExist){
      throw 'Email already exist'
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new Schema.users({
      username: req.body.username,
      email: req.body.email,
      password,
    });

    const savedUser = await user.save();
    res.json({
      error: null,
      data: savedUser
    });
  } catch (error) {
    return res.status(400).send(error)
  }
});

module.exports = router;