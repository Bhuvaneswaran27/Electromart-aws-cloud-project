const express = require("express");
const router = express.Router();

const upload = require("../controllers/uploadController");

router.post("/", upload.single("image"), (req, res) => {
    res.json({
        message: "Image uploaded successfully",
        imageUrl: req.file.location
    });
});

module.exports = router;
