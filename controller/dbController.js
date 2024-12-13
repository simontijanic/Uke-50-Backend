const mongoose = require("mongoose")

exports.connect = () => {
    mongoose.connect("mongodb://127.0.0.1/", (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("connected DB")
        }
    })
}