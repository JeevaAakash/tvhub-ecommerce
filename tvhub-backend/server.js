const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");   // orders API

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/tvhub")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("TV Hub Backend Running 🚀");
});

// Test route
app.get("/test", (req, res) => {
  res.send("Test Working ✅");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});