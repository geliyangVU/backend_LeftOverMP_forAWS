const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(200).json({
    title: "heroku for LeftOverMarketPlace",
    message: "working",
    message2: "this is the home route"
  });
});


router.get("/1", async (req, res) => {
  return res.status(200).json({
    message: "inside/1"
  });
});



router.get("/file", async (req, res) => {
  return ()=>{res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h2>Test String</h2><h3>Inside h3</h3>'));}
});
module.exports = router;