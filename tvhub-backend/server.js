const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// MongoDB URL
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tvhub";

// CORS FIX
app.use(cors({
  origin: "http://127.0.0.1:5500",
  credentials: true
}));

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("TV Hub Backend Running 🚀");
});

// Health Route
app.get("/health", (req, res) => {
  res.json({
    status: "Server is running"
  });
});

// Test Route
app.get("/test", (req, res) => {
  res.send("Test Working ✅");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});