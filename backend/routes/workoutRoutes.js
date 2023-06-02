const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router
  .route("/")
  .get(workoutController.getWorkouts)
  .post(workoutController.createWorkout);
router
  .route("/:id")
  .get(workoutController.getWorkoutById)
  .patch(workoutController.updateWorkoutById)
  .delete(workoutController.deleteWorkoutById);

module.exports = router;
