const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userEmail: String,
  productName: String,
  price: Number,
  paymentMethod: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);