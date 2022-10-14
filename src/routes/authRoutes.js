const { body } = require("express-validator");
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");


router.post(
  "/register",
  body("username").isLength({ min: 5 }),
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  register
);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  login
);

module.exports = router;
