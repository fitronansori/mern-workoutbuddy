const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.getAllUsers);

router.route("/login").post(userController.loginUser);

router.route("/signup").post(userController.signupUser);

module.exports = router;
