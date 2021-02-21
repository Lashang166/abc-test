const mongoose = require("mongoose")

const PaymentSchema = new mongoose.Schema({
    name: String
})


module.exports = mongoose.model("Payment", PaymentSchema)