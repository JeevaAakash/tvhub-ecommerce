const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(200).json({
      message: "User Registered Successfully"
    });

  } catch (error) {

    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    res.status(200).json({
      message: "Login Successful",
      email: user.email,
      name: user.name
    });

  } catch (error) {

    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

module.exports = router;