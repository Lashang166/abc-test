const router  = require("express").Router()
const Payment = require('../controllers/paymentController')


router.post("/add", Payment.add)
router.get("/get", Payment.get)
router.delete('/delete/:id', Payment.delete)

module.exports = router