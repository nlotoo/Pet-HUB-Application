const mongoose = require('mongoose');
const { DB_PORT } = require("./config.js");

mongoose.connect(`mongodb://localhost:${DB_PORT}/Pet-catalog-app`,);

require("../schemes/USER");


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB CONNECTED");
});

module.exports = mongoose;