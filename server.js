const express = require("express")
const session = require("express-session")
const connectDB = require("./config/db")
const passportConf = require("./config/passport")
const cookieParser = require("cookie-parser")
const cors = require('cors')
require('dotenv').config();
const multer = require('multer')

const upload = multer()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(cors())

connectDB()

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
//     res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
//     return next()
//  })

app.use(session({
    name:'session5',
    secret: 'secret_code',
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 3600000 }
}))
passportConf(app)

app.get("/check", (req, res) => {
    const token = "55"
    res.cookie("aa", token, { httpOnly: true, sameSite: true})
    res.send("ok")
    //console.log(req.sessionID)
})   
const cpUpload = upload.fields([{ name: 'photos', maxCount: 1 }])
const cpUpload2 = upload.single('photos')

app.use("/api/auth", require('./routes/authRoute'))
app.use("/api/user", require('./routes/userRoute'))
app.use("/api/product", require("./routes/productRoute"))
app.use("/api/category", require("./routes/categoryRoute"))
app.use("/api/brand", require("./routes/brandRoute"))
app.use('/api/order', require("./routes/orderRoute"))
app.use('/api/payment', require("./routes/paymentRoute"))
app.use('/api/express', require("./routes/expressRoute"))


if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("app is running", PORT);
})

