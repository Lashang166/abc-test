const router = require("express").Router()

const productControllers = require("../controllers/productControllers")
const upload = require('../uploadsCon')

const cpUpload = upload.fields([{ name: 'photos', maxCount: 3 }])

router.post("/add", cpUpload, productControllers.create)    
router.get("/get", productControllers.fetch)
router.get("/get/:id", productControllers.get)
router.delete("/delete/:id", productControllers.delete)

module.exports = router