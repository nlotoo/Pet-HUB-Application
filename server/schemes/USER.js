const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        requred: true,
        minLength: 4
    },
    password: {
        type: String,
        requred: true
    },
    userEmail: {
        type: String
    },
    phoneNumber: {
        type: Number
    }

})

module.exports = mongoose.model("User", userSchema);