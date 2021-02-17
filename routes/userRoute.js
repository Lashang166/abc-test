const router = require('express').Router()

const userController = require('../controllers/userControllers')
const passport = require("passport")

const auth = passport.authenticate("local", { session: true })

function check(req, res) {
    res.send(req.session)
}

router.post("/register", userController.register)
router.post("/login",auth,  userController.login)
router.get("/logout",  userController.logout)
router.get("/authenticated",  userController.authenticated)

router.get("/", check)
module.exports = router