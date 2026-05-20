const express = require("express");
const Order = require("../models/Order");

const router = express.Router();


router.post("/", async (req, res) => {

  try {

    const { userEmail, productName, price, paymentMethod } = req.body;

    const newOrder = new Order({
      userEmail,
      productName,
      price,
      paymentMethod
    });

    await newOrder.save();

    res.status(200).json({
      message: "Order placed successfully"
    });

  } catch (error) {

    console.log("Order Error:", error);

    res.status(500).json({
      message: "Server error"
    });

  }

});


router.get("/:email", async (req, res) => {

  try {

    const orders = await Order.find({
      userEmail: req.params.email
    }).sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error fetching orders"
    });

  }

});

module.exports = router;