const mongoose = require('mongoose')
const db = process.env.MONGODB_URL


module.exports = function() {  
    mongoose
        .connect(process.env.MONGODB_URL,
            { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true})
        .then(() => {
            console.log("conenct to db");
        })
        .catch(err => {
            console.log(err);
        })
}