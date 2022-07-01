const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "working",
    message2:"this is the home route"
  });
});

module.exports = router;