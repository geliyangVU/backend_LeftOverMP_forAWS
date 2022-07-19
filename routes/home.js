const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(200).json({
    title: "heroku for LeftOverMarketPlace",
    message: "working",
    message2: "this is the home route"
  });
});


router.get("/1", async (req, res) => {
  const returnhtml=`<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="file">File:</label>
  <input type="file" id="file" name="file" required />
</form>`
  res.send(returnhtml) });


module.exports = router;