require("dotenv").config();
const express = require("express");
// import DBConnection untuk menghubungkan ke database
const connectDB = require("./config/DBConnetion");
const { default: mongoose } = require("mongoose");

// import cors dan corsOptions untuk mengatur CORS
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const CookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 2001;

connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(CookieParser());

app.use((req, res, next) => {
  console.log(req.path || req.url || req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Workout Buddy");
});

app.use("/api/workouts", require("./routes/workoutRoutes"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  // listen method untuk menjalankan server pada port yang telah ditentukan
  app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
  });
});
