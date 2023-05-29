const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Workout Routes");
});

router.get("/:id", (req, res) => {
  res.send("Workout Routes by ID");
});

router.post("/", (req, res) => {
  res.send("Create Workout Route");
});

router.patch("/:id", (req, res) => {
  res.send("Update Workout Route");
});

router.delete("/:id", (req, res) => {
  res.send("Delete Workout Route");
});

module.exports = router;
