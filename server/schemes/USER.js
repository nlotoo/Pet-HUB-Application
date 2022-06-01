const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        requred: true,
        minLength: 4
    },
    userEmail: {
        type: String
    },
    password: {
        type: String,
        requred: true
    },

    gender: {
        type: String
    },

    location: {
        type: String
    }

})

module.exports = mongoose.model("User", userSchema);