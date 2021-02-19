const router = require("express").Router()

const passport = require("passport")
const categoryController = require('../controllers/categoryController')

const auth = passport.authenticate("local", { session: false })

function test(req, res, next){
    console.log("test");
    next()
}

router.get("/", categoryController.show)
router.post("/create", categoryController.create)



module.exports = router