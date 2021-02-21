const User = require('../models/userModel')




module.exports = {
    login: async (req, res) => {
        try {
            console.log(req.session);
            if(req.isAuthenticated()){
                const username = req.session.passport.user.username
                const role = req.session.passport.user.role
                res.status(200).json({
                    isAuthenticated: true, user : {username, role}, 
                    message: "successfully"
                })            
            } 
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })
        }
    },
    logout: (req, res) => {
        req.logout()
        req.session.destroy();
        res.clearCookie('connect.sid');
        res.json({isAuthenticated: false, user: {username : "", role: ""}});
    },
    authenticated: (req, res) => {
        try {
            const {username, role} = req.user;
            res.status(200).json({
                isAuthenticated : true, user : {username, role}, message: "auth" })

        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })
        }
    },
    register: async (req, res) => {
        try {
            const { username, email, password} = req.body;
            if( !username || !email || !password){
                res.status(200).json({
                    message: "please enter all field",
                    error: true
                })
            }
            const user = await User.findOne({username })
            const mail = await User.findOne({email})
            if(user) {
                res.status(400).json({
                    message: "This username is already taken",
                    error: true
                })
            }else if(mail){
                res.status(400).json({
                    message: "This email is already taken",
                    error: true
                })
            }else {
                const newUser = new User({username, email, password})
                newUser.save()
                res.status(201).json({
                    message: "Account successfully created",
                    error: false,
                    newUser
                })
            }

        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })
        }
    },
}