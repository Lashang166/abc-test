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

app.use(session({
    name:'session',
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

app.post("/upload", cpUpload2 , (req, res) => {
    const t = req.body.photos
    const {photos } = req
    console.log(req.body);
    //console.log(photos);
    console.log(req.photos);
})

app.use("/api/user", require('./routes/userRoute'))

app.listen(4000, () => {
    console.log("app is running");
})

