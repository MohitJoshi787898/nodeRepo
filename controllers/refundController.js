const express = require('express');
const refund = require("../models/refundModal")

exports.createRefund = async (req, res) => {
    try {
        const newRefund = new refund(req.body);
        const savedRefund = await newRefund.save();
        res.status(201).json({
            success: true,
            message: "Refund request created successfully",
            data: savedRefund
        })

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Error creating refund request",
            error: error.message
        })
    }
}