const mongoose = require("mongoose")

const ExpressSchema = new mongoose.Schema({
    name: String
})


module.exports = mongoose.model("Express", ExpressSchema)