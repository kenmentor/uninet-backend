const express = require("express");
const multer = require("multer");
const router = express.Router();
const Resource = require("../modules/resource");
const connectDB = require("../utility/connectDb");
const upload = multer({ dest: "uploads/" }); // Configure multer storage

router.post(
  "/upload",
  upload.fields([{ name: "files" }, { name: "thumbnail" }]),
  (req, res) => {
    connectDB();
    const { files, body } = req;
    try {
      const newResource = new Resource({
        title: body.title,
        description: body.description,
        category: body.category,
        thumbnail: body.thumbnail,
        views: 0,
        rating: 4.5,
      });
      const resource = newResource.save();
      console.time(resource);
      console.log("Files:", req.files);
      console.log("Body:", req.body);

      // Process and save data as needed
      res.status(200).json({ message: "Resource uploaded successfully!" });
    } catch (error) {
      console.error("Error handling upload:", error);
      res.status(500).json({ message: "Failed to upload resource." });
    }
  }
);

module.exports = router;
