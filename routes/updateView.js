const express = require("express");
const router = express.Router();
router.put("/updateview", async (req, res) => {
  res.json("working ");
});
module.exports = router;
