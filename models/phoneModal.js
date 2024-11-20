const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Phone', phoneSchema)

