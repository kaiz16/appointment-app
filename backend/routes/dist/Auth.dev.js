"use strict";

var router = require('express').Router();

var Schema = require('../Models');

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var verifyToken = require('./verifyToken'); // login route


router.post("/login", function _callee(req, res) {
  var user, validPassword, token;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Schema.users.findOne({
            email: req.body.email
          }));

        case 2:
          user = _context.sent;

          if (user) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Email is wrong"
          }));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(bcrypt.compare(req.body.password, user.password));

        case 7:
          validPassword = _context.sent;

          if (validPassword) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Password is wrong"
          }));

        case 10:
          // create token
          token = jwt.sign( // payload data
          {
            username: user.username,
            id: user._id
          }, process.env.TOKEN_SECRET);
          res.header("auth-token", token).json({
            error: null,
            data: {
              token: token
            }
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get("/verifyToken", function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          verifyToken(req, res, function () {
            res.status(200).json({
              error: null,
              data: {
                token: true
              }
            });
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.post("/register", function _callee3(req, res) {
  var isEmailExist, salt, password, user, savedUser;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Schema.users.findOne({
            email: req.body.email
          }));

        case 2:
          isEmailExist = _context3.sent;

          if (!isEmailExist) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            error: "Email already exists"
          }));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 7:
          salt = _context3.sent;
          _context3.next = 10;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, salt));

        case 10:
          password = _context3.sent;
          user = new Schema.users({
            username: req.body.username,
            email: req.body.email,
            password: password
          });
          _context3.prev = 12;
          _context3.next = 15;
          return regeneratorRuntime.awrap(user.save());

        case 15:
          savedUser = _context3.sent;
          res.json({
            error: null,
            data: savedUser
          });
          _context3.next = 22;
          break;

        case 19:
          _context3.prev = 19;
          _context3.t0 = _context3["catch"](12);
          res.status(400).json({
            error: _context3.t0
          });

        case 22:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[12, 19]]);
});
module.exports = router;