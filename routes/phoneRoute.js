const express = require('express');
const phoneController = require("../controllers/phoneController")

const router = express.Router();
router.get('/getPhoneNumber', phoneController.getNumber)
router.post("/create", phoneController.createPhone);
router.put('/updateNumber', phoneController.updateNumber)
module.exports = router;