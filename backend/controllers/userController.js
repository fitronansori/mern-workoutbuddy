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
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser, getAllUsers };
