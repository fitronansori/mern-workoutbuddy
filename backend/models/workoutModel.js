const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create a model for workouts dan akan membuat collection di database
const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
