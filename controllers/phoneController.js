const phoneModal = require("../models/phoneModal")


exports.getNumber = async (req, res) => {
    try {
        const phone = await phoneModal.findOne();
        res.status(200).json({
            success: true,
            data: phone.phoneNumber,
            status: "success"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            status: "error"
        });
    }

}
exports.createPhone = async (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        res.status(400).json({
            message: "Invalid phone number",
            status: "false"

        })
    }
    try {

        const phone = new phoneModal({ phoneNumber });
        await phone.save();
        res.status(200).send({
            status: 'success',
            message: 'Your phone was successfully'
        })

    } catch (error) {
        res.status(500).send({
            message: error.message,
            status: "error"
        });

    }

}
exports.updateNumber = async (req, res) => {
    const { phoneNumber, newPhoneNumber } = req.body;

    try {
        // Find the phone document by phoneNumber
        const phoneRecord = await phoneModal.findOne({ phoneNumber });

        // If phone number does not exist
        if (!phoneRecord) {
            return res.status(404).send({
                status: 'false',
                message: 'Phone not available'
            });
        }

        // Update the phone number
        phoneRecord.phoneNumber = newPhoneNumber;
        await phoneRecord.save(); // Await the save operation

        res.status(200).send({
            status: 'success',
            updatedPhone: phoneRecord,
            message: 'Phone updated successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: "error",
        });
    }
};
