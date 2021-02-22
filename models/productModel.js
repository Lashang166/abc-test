const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    images: Array,
    colors: Array,
    variation: Array,
    countInStock: Number,
    description: String,
    rating: [{
        username: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        rate: Number
    }],
    reviews: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: "Review"
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: "Category"
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId, ref: "Brand"
    },
    soldCount: Number,
    discount: Number,
}, {timestamps: true})


module.exports = mongoose.model("Product", ProductSchema)

