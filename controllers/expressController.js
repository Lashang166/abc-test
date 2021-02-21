const Express = require("../models/expressModel")


module.exports = { 
    add: async (req, res) => {
        try {
            const { name } = req.body
            if(req.user.role === "admin"){
                const ex = await new Express({ name })
                ex.save()
                res.status(201).json({
                    message: "express successfully created"
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
            Express.find({}, (err, ex) => {
                res.status(200).json(ex)
            })
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })    
        }
    }
}