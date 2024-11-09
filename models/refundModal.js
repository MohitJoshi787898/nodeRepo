const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        compleatAddresse: {
            type: String,
        },
        email: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        orderId: {
            type: String,
            required: true
        },
        refundAmount: {
            type: Number,
            required: true
        },
        bankName: {
            type: String,
            required: true
        },
        accountType: {
            type: String,
            enum: ['CHECKING', 'SAVING'],
            required: true,
            default: 'CHECKING'

        }


    })

module.exports = mongoose.model("Refund", refundSchema)