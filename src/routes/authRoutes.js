const { body } = require("express-validator");
const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/authentication");
const {
  register,
  login,
  getLoggedUser,
} = require("../controllers/authController");

router.post(
  "/register",
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

router.get("/me", authenticate, getLoggedUser);

module.exports = router;
