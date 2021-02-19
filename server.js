const express = require("express")
const session = require("express-session")
const connectDB = require("./config/db")
const passportConf = require("./config/passport")
const cookieParser = require("cookie-parser")
const cors = require('cors')

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


app.use("/api/user", require('./routes/userRoute'))
app.use("/api/product", require("./routes/productRoute"))
app.use("/api/category", require("./routes/categoryRoute"))
app.use("/api/brand", require("./routes/brandRoute"))

app.listen(4000, () => {
    console.log("app is running");
})

