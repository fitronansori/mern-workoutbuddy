const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

// @desc    Get all workouts
// @route   GET /api/workouts
// @access  Public

const getWorkouts = async (req, res) => {
  // get workouts from database berdasarkan user_id
  const user_id = req.user._id; //kenapa null? karena belum ada user yang login

  try {
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Create a workout
// @route   POST /api/workouts
// @access  Public

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({ title, reps, load, user_id });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Get a workout by ID
// @route   GET /api/workouts/:id
// @access  Public

const getWorkoutById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ error: `Invalid workout ID ${id}` });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    res.status(404).json({ error: `Workout ID ${id} not found` });
  } else {
    res.status(200).json(workout);
  }
};

// @desc    Update a workout by ID
// @route   PATCH /api/workouts/:id
// @access  Public

const updateWorkoutById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ error: `Invalid workout ID ${id}` });
    }

    const workout = await Workout.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );

    if (!workout) {
      res.status(404).json({ error: `Workout ID ${id} not found` });
    } else {
      res.status(200).json(workout);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// @desc    Delete a workout by ID
// @route   DELETE /api/workouts/:id
// @access  Public

const deleteWorkoutById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ error: `Invalid workout ID ${id}` });
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
      res.status(404).json({ error: `Workout ID ${id} not found` });
    } else {
      res.status(200).json({ message: `Workout ID ${id} deleted` });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
  getWorkoutById,
  updateWorkoutById,
  deleteWorkoutById,
};
