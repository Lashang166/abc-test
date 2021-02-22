const router  = require("express").Router()
const expressController = require("../controllers/expressController")
const ExrpessController = require('../controllers/expressController')



router.post("/add", ExrpessController.add)
router.get("/get", expressController.get)
router.delete('/delete/:id', expressController.delete)



module.exports = router