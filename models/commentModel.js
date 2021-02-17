const mongoose = require("mongoose")




const reviewSchema = new mongoose.Schema({
    username: { 
        type: mongoose.Schema.Types.ObjectId, ref: "User" 
    },
    body: String,
    date: Date,
    Product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }
    
},{timestamps: true})


module.exports = mongoose.model("Review", reviewSchema)