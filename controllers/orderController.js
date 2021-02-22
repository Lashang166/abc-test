const Orders = require("../models/orderModel")
const Product = require("../models/productModel")



 

module.exports = {
    add: async (req, res) => {
        if(req.isAuthenticated()){
            const {items,  totalPrice, address,  express, isPaid, payment} = req.body

            const order = new Orders({
                userId: req.user._id,
                items,
                totalPrice,
                address, 
                isPaid,
                express,
                payment
            })

            items.map(async (item) => {
                let qty = item.productCount;
                const product = await Product.findByIdAndUpdate({_id: item.productId}, { $inc: { soldCount: qty, countInStock: -qty  }})
            })

            order.save()
            res.status(200).json({ message: "success", order})
        }else{
            res.status(401).json({ message: "Unauthorize"})
        }
    },
    get: async (req, res) => {
        if(req.isAuthenticated()) {
            const order = await Orders.find({userId: req.user._id}).populate("express payment items.productId userId", "name name title username")
            res.status(200).json({ order})
        }else{
            res.status(401).json({ message: "Unauthorize"})
        }
    },
    fetch: async (req, res) => {
        if(req.user.role === "admin"){
            const orders = await Orders.find({})
            res.status(200).json({ orders })

        }else{
            res.status(401).json({ message: "Unauthorize"})
        }
    },
    getById: async (req, res) => {
        //const order = await Orders.find({})
    }
    
}