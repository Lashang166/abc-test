const router = require('express').Router();
const passport = require('passport')


// auth with google+
router.get('/google', passport.authenticate("google", { 
    scope: ['profile', 'email']
 }))


/// callback

router.get('/google/redirect', passport.authenticate("google"), (req, res) => {
    console.log("ok");
    console.log("a", req.isAuthenticated());
    if(req.isAuthenticated()){
        // res.status(200).json({
        //     isAuthenticated: true, user : req.user, 
        //     message: "successfully"
        // })  
        res.redirect('http://localhost:3000/')
    }
    console.log(req.user);
})

router.get('/isAuth', (req, res) => {
    //if(req.user){
        res.status(200).json({user: req.user})
    //     res.status(200).json({message: "ok"})
    // }else{
    //     res.status(200).json({message: "false"})
    // }
})


module.exports = router;