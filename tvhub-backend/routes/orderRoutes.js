const express = require("express");
const Order = require("../models/Order");

const router = express.Router();


// ✅ PLACE ORDER
router.post("/", async (req, res) => {
  try {
    console.log("Order data received:", req.body);

    const { userEmail, productName, price, paymentMethod } = req.body;

    const newOrder = new Order({
      userEmail,
      productName,
      price,
      paymentMethod
    });

    await newOrder.save();

    res.status(200).json({ message: "Order placed successfully" });

  } catch (error) {
    console.log("Order Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ GET ORDERS BY USER EMAIL (My Orders Page)
router.get("/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;

    const orders = await Order.find({ userEmail });

    res.status(200).json(orders);

  } catch (error) {
    console.log("Fetch Orders Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;