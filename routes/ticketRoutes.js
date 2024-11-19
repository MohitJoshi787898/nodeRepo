const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

//define the GET route for fetching a ticket Number
router.get("/", (req, res) => {
    res.send("Ticket route")

})
router.get("/ticket/:ticketNumber", ticketController?.getTicketByNumber);
router.delete("/ticket/:ticketNumber", ticketController?.deleteTicket);
router.post("/ticket", ticketController?.createTicket);
router.get("/tickets", ticketController?.getAllTickets);

module.exports = router;