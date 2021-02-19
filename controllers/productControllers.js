const fs = require("fs")
const Product = require("../models/productModel");


module.exports = {
  fetch: async (req, res) => {
      try {
        const product = await Product.find();
        res.status(200).json({
          product
        })
      } catch (error) {
        res.status(500).json({
          status: "fail",
          message: error,
        });
      }
  },
  get: async  (req, res) => {
    try {
      const product = await Product.findById({_id : req.params.id}).populate("category brand", "category name")
      res.status(200).json({
        product
      })
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error,
      });
    }
  },
  create: async (req, res) => {
    //res.json({messa: "aa"})
    const paths = []
    const fileKey = req.files[Object.keys(req.files)[0]];  

    fileKey.forEach(k => {
      paths.push(k.path);
    })
    
    try {
      if (req.user.role === "admin") {
        const { 
                title, 
                price, 
                colors, 
                variation, 
                countInStock, 
                description, 
                category, 
                brand, 
                discount } = req.body;
                const colorsList = colors.split(',')
                // if(!title || !price || !colors || !variation || !countInStock || !category || !brand ){
                  //     res.status(200).json({ message: "please enter all field" , error: true})
                  // }
        const product = await new Product({ title, price, colors: colorsList , variation, countInStock, description, category, brand, discount, images: paths });
        product.save()
        res.status(201).json({ message: "successfuly created", product})

      } else {
        paths.forEach(p => fs.unlinkSync(p))
        res.status(403).json({ message: "You'er not admin", msgError: true });
      }
   } catch (error) {
      paths.forEach(p => fs.unlinkSync(p))
      res.status(500).json({
        status: "fail",
        message: error,
      });
    } 
   },
   delete: async (req, res) => {
     try {
      if(req.user.role === "admin"){
        const product = await Product.findById({ _id: req.params.id})
        if(product){
          product.images.forEach((p) => {
            fs.unlinkSync(p)
          })
          const del = await Product.deleteOne({ _id: product._id})
          res.status(202).json({ message: `accepted ${product.title} was deleted`, product})
        }else{
          res.status(204).json({ message: "No Content"})
        }
     
      } else {
        res.status(403).json({ message: "You'er not admin", msgError: true });
      }
     } catch (error) {
        res.status(500).json({
          status: "fail",
          message: error,
        });
     }

   }


};
