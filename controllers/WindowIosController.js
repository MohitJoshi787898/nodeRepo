const WindowsIos = require("../models/windowIosModal");

exports.createWindowIos = async (req, res) => {
    const data = req.body;
    console.log(data, "dataaaa")
    const newWindowIos = new WindowsIos(data);
    try {
        const windowIos = await newWindowIos.save();
        res.status(200).json({
            success: true,
            message: "Window Ios Created Successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create Window Ios"
        });
    }

}
exports.updateWindowIos = async (req, res) => {
    // const { id } = req.params;
    const { title, window, ios, _id } = req.body;

    try {
        // Find the link by ID and update it
        const updatedLink = await WindowsIos.findByIdAndUpdate(
            _id,
            { title, window, ios },
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

exports.getAllWindowIos = async (req, res) => {
    try {
        const windowIos = await WindowsIos.find();
        res.status(200).json({
            success: true,
            data: windowIos
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to get Window Ios",
            error: error
        })
    }
}