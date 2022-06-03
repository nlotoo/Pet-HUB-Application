const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({

    petName: {
        type: String,

    },
    petWeight: {
        type: String
    },
    petBreed: {
        type: String,

    },
    petAge: {
        type: String
    },
    petPhoto: {
        type: String
    },
    petInfo: {
        type: String
    },
    petOwner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]

}

)

module.exports = mongoose.model("Pet", petSchema);