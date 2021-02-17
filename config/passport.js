const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;

const User = require('../models/userModel')


module.exports = function (app) {
    passport.use(
        new LocalStrategy((username, password, done) => {
            User.findOne({username}, (err, user) => {
                if(err)
                    return done(err)
                if(!user)
                    return done(null, false)
                user.comparePassword(password, done)
            })
        })
    )
    
    passport.serializeUser((user, cb) => {
        cb(null, user)
    })

    passport.deserializeUser((id, cb) => {
        User.findById(id._id, (err, user) => {
            if(err)
                return cb(err)
            cb(null, user)
        })
    })

    app.use(passport.initialize())
    app.use(passport.session())

}