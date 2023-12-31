const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// Register a new user
router.post("/signup", userController.signup);

// Login user
router.post("/login", userController.login);

module.exports = router;
