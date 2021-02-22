const Payment = require("../models/paymethodModel")


module.exports = { 
    add: async (req, res) => {
        try {
            const { name } = req.body
            if(req.user.role === "admin"){
                const ex = await new Payment({ name })
                ex.save()
                res.status(201).json({
                    message: "Payment successfully created"
                })
            }else{
                res.status(403).json({message: { msgBody: "You'er not admin", msgError: true}})
            }
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })            
        }
    },
    get: (req, res) => {
        try {
            Payment.find({}, (err, ex) => {
                res.status(200).json(ex)
            })
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })    
        }
    },
    delete: async (req, res) => {
        try {
            if(req.user.role === "admin"){
              const payment = await Payment.findByIdAndDelete({ _id: req.params.id })
              res.status(202).json({
                    message: "category successfully deleted",
                    payment
                })
            }else{
                res.status(403).json({message: { msgBody: "You'er not admin", msgError: true}})

            }
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })   
        }
    }
}