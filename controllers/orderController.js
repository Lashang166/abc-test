const Orders = require("../models/orderModel")



 

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

            order.save()
            res.status(200).json({ message: "success", order})
        }else{
            res.status(401).json({ message: "Unauthorize"})
        }
    },
    get: async (req, res) => {
        if(req.isAuthenticated()) {
            const order = await Orders.find({userId: req.user._id}).populate("express payment items.productId", "name name title price")
            res.status(200).json({ order})
        }else{
            res.status(401).json({ message: "Unauthorize"})
        }
    }
    
}