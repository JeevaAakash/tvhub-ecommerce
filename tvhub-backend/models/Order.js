const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

userEmail: {
type: String,
required: true
},

productName: {
type: String,
required: true
},

price: {
type: Number,
required: true
},

paymentMethod: {
type: String,
required: true
},

paymentStatus: {
type: String,
default: "Pending"
},

paymentId: {
type: String,
default: null
}

}, {
timestamps: true
});

module.exports = mongoose.model("Order", orderSchema);
