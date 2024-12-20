const Ticket = require('../models/ticketModel');

// POST API: Create a new ticket
exports.createTicket = async (req, res) => {
    try {
        const { ticketNumber, details } = req.body;

        // Check if the ticket already exists
        const existingTicket = await Ticket.findOne({ ticketNumber });
        if (existingTicket) {
            return res.status(400).json({
                success: false,
                message: 'A ticket with this number already exists.',
            });
        }

        // Create a new ticket
        const newTicket = new Ticket({
            ticketNumber,
            details,
        });

        await newTicket.save();

        res.status(201).json({
            success: true,
            message: 'Ticket created successfully',
            ticket: newTicket,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// GET API: Retrieve a ticket by ticket number
exports.getTicketByNumber = async (req, res) => {
    try {
        const { ticketNumber } = req.params;
        console.log(`ticket: ${ticketNumber}`);

        // Find the ticket by its number
        const ticket = await Ticket.findOne({ ticketNumber });

        if (ticket) {
            res.status(200).json({
                success: true,
                message: 'Ticket found',
                ticket,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Ticket not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({});
        res.status(200).json({
            success: true,
            data: tickets,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        })
    }
}
exports.deleteTicket = async (req, res) => {
    try {
        const { ticketNumber } = req.params; // Assuming ticketId corresponds to the _id field
        console.log('deleteTicket', ticketNumber, req.params);

        // Validate ticketId
        if (!ticketNumber) {
            return res.status(400).json({
                success: false,
                message: 'Ticket ID is required',
            });
        }

        const deletedTicket = await Ticket.findByIdAndDelete(ticketNumber);

        // Check if ticket exists
        if (!deletedTicket) {
            return res.status(404).json({
                success: false,
                message: 'Ticket not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Ticket deleted successfully',
            deletedTicket,
        });

    } catch (error) {
        console.error('Error deleting ticket:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};

