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
  register
);

router.post(
  "/login",
  body("email").isEmail(),
  login
);

router.get("/me", authenticate, getLoggedUser);

module.exports = router;
