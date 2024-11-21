const express = require('express');
const router = express.Router();
const serverController = require('../controllers/serverController');


router.get("/", serverController.getAllServer)

router.post("/", serverController.createServer)
router.put("/", serverController.updateServer)

module.exports = router