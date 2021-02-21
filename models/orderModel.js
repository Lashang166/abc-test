const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User" 
    },
    items: [{ 
        productId:{ type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        productCount: Number
    
    }],
    date: {
        type: Date,
        default: Date.now()
    },
    totalPrice: Number,
    address: String,
    isPaid: { Type: Boolean, default: false},
    paidAt: Date,
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
    express: {  type: mongoose.Schema.Types.ObjectId, ref: "Express" },
    payment: {  type: mongoose.Schema.Types.ObjectId, ref: "Payment" }


}, {timestamps: true})


const orderModal = mongoose.model("Orders", orderSchema);
module.exports = orderModal