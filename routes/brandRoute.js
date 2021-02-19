const router = require("express").Router()

const passport = require("passport")
const brandController = require('../controllers/brandController')

const auth = passport.authenticate("local", { session: false })



router.get("/", brandController.show)
router.post("/create", brandController.create)



module.exports = router