"use strict";

var jwt = require("jsonwebtoken"); // middleware to validate token


var verifyToken = function verifyToken(req, res, next) {
  var token = req.header("auth-token");
  if (!token) return res.status(401).json({
    error: "Access denied"
  });

  try {
    var verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next(); // to continue the flow
  } catch (err) {
    res.status(400).json({
      error: "Token is not valid"
    });
  }
};

module.exports = verifyToken;