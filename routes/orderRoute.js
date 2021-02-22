const router = require("express").Router()

const orderControllers =  require('../controllers/orderController')

router.post("/add", orderControllers.add)
router.get("/get", orderControllers.get)
router.get('/fetch', orderControllers.fetch)



module.exports = router