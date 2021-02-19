const Category = require('../models/categoryModel')


//const role = req.session.passport.user.role

module.exports = {
    show: async (req, res) => {
        try {
            const cate = await Category.find()
            res.status(200).json(cate)
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })        
        }
    },
    create: async (req, res) => {
        try {
            const { category } = req.body
            if(req.user.role === "admin"){
                const cate = await new Category({ category })
                cate.save()
                res.status(201).json({
                    message: "category successfully created"
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
    update: async (req, res) => {
        
    }
}