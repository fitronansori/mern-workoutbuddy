const express = require("express");

const app = express();
const PORT = process.env.PORT || 2001;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path || req.url || req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Workout Buddy");
});

app.use("/api/workouts", require("./routes/workoutRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
