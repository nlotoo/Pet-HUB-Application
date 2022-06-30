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
    userPhoneNumber: {
        type: String
    },

    location: {
        type: String
    },
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet"
    }],
    liked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet"
    }]

})

module.exports = mongoose.model("User", userSchema);