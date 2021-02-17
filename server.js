const express = require("express")
const session = require("express-session")
const connectDB = require("./config/db")
const passportConf = require("./config/passport")


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

connectDB()

app.use(session({
    secret: "secret_code",
    cookie: { httpOnly: true }
}))

passportConf(app)


app.listen(4000, () => {
    console.log("app is running");
})

