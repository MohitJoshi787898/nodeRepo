const express = require('express');
const refund = require("../controllers/refundController")

const router = express.Router();

// POST route to create a refund request
router.post("/createRefund", refund.createRefund)

// GET route to retrieve all refund requests

router.get("/refunds", refund.getAllRefunds)
// router.get("/refunds", refund.getRefunds)

module.exports = router;