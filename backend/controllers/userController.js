const mongoose = require("mongoose");
const User = require("../models/userModel");

// @desc    Get all users
// @route   GET /api/user
// @access  Public

const getAllUsers = async (req, res) => {
  res.send("Get All Users");
};

// @desc    Login user
// @route   POST /api/user/login
// @access  Public

const loginUser = async (req, res) => {
  res.send("Login User");
};

// @desc    Signup user
// @route   POST /api/user/signup
// @access  Public

const signupUser = async (req, res) => {
  res.send("Signup User");
};

module.exports = { loginUser, signupUser, getAllUsers };
