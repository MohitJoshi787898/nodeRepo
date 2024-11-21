const serverModal = require("../models/serverModal");

exports.createServer = async (req, res) => {
    const data = req.body;
    console.log(data, "dataaaa")
    const newServer = new serverModal(data);
    try {
        const server = await newServer.save();
        res.status(200).json({
            success: true,
            message: "Server Link Created Successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create Server Link"
        });
    }

}
exports.updateServer = async (req, res) => {
    // const { id } = req.params;
    const { title, server, _id } = req.body;

    try {
        // Find the link by ID and update it
        const updatedLink = await serverModal.findByIdAndUpdate(
            _id,
            { title, server },
            { new: true, runValidators: true } // Returns the updated document and runs validation
        );

        // If no link is found, return an error
        if (!updatedLink) {
            return res.status(404).json({ success: false, message: "Link not found" });
        }

        // Successfully updated
        res.status(200).json({ success: true, data: updatedLink });
    } catch (error) {
        console.error("Error updating link:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

exports.getAllServer = async (req, res) => {
    try {
        const server = await serverModal.find();
        res.status(200).json({
            success: true,
            data: server
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to get link to server",
            error: error
        })
    }
}