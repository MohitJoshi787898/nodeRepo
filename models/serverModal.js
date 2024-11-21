const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true

    },
    server: {
        type: String,
        // required:true
    },

})
module.exports = mongoose.model("Server", serverSchema)