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
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Create a model for workouts dan akan membuat collection di database
const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
