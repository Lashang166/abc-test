const fs = require("fs")
const Product = require("../models/productModel");


module.exports = {
  show: async (req, res) => {
      console.log(req.user);
  },
  create: async (req, res) => {
    //res.json({messa: "aa"})
    const paths = []
    const fileKey = req.files[Object.keys(req.files)[0]];  

    fileKey.forEach(k => {
      paths.push(k.path);
    })
    
    //try {
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
  //  } catch (error) {
  //     paths.forEach(p => fs.unlinkSync(p))
  //     res.status(500).json({
  //       status: "fail",
  //       message: error,
  //     });
  //   } 
   },


};
