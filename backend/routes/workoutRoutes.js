const express = require("express");
const router = express.Router();

const Workout = require("../models/workoutModel");

router
  .route("/")
  .get(async (req, res) => {
    try {
      // mengambil semua data workouts dari database
      const workouts = await Workout.find();
      // mengirim response berupa data workouts
      res.json(workouts);
    } catch (error) {
      // jika terjadi error, kita akan mengirim response dengan status 400
      // dan menampilkan pesan error
      res.status(400).json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      // menangkap data dari body request
      const { title, reps, load } = req.body;
      // membuat data baru di database menggunakan create() method
      const workout = await Workout.create({ title, reps, load });
      // mengirim response berupa data yang baru saja dibuat
      res.status(201).json(workout);
    } catch (error) {
      // jika terjadi error, kita akan mengirim response dengan status 400
      // dan menampilkan pesan error
      res.status(400).json({ error: error.message });
    }
  });
router
  .route("/:id")
  .get((req, res) => {
    res.send("Workout Routes by ID");
  })
  .patch((req, res) => {
    res.send("Update Workout Route");
  })
  .delete((req, res) => {
    res.send("Delete Workout Route");
  });

module.exports = router;
