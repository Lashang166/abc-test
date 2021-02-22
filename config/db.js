const mongoose = require('mongoose')



module.exports = function() {
    mongoose
        .connect("mongodb://127.0.0.1:27017/Laz",
            { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true})
        .then(() => {
            console.log("conenct to db");
        })
        .catch(err => {
            console.log(err);
        })
}