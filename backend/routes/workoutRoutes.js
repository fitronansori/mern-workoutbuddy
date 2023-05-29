const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Workout Routes");
  })
  .post((req, res) => {
    res.send("Create Workout Route");
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
