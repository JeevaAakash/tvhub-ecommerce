const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tvhub";

app.use(cors({
app.use(cors({
  origin: "*",
  credentials: true
}));  credentials: true
}));

app.use(express.json());

mongoose.connect(MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Connection Error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("TV Hub Backend Running 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    status: "Server is running"
  });
});

app.get("/test", (req, res) => {
  res.send("Test Working ✅");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});