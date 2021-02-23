const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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

    passport.use(
        new GoogleStrategy({
            // options for google strategy
            callbackURL: "/api/auth/google/redirect",
            clientID: googleKey.google.clientID,
            clientSecret: googleKey.google.clientSecret,
            proxy: true
    
        }, async (accessToken, refreshToken, profile, done) => {
            // passport callback function
            console.log(profile);
            const find = await User.findOne({ googleId: profile.id })
    
            if(find){
                done(null, find)
            }else{
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    thumbnail:  profile._json.picture,
                    email: profile._json.email,
                    
                }).save()
                  .then((newUser) => {
                      console.log("usre created");
                      done(null, newUser)
                  })
                  .catch(err => {
                      done(err, null)
                  })
            }
      
    
        })
    );   
    
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