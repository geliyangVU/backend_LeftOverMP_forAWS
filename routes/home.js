const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get("/", async (req, res) => {
  const returnHTML=`<h1>LeftOverBackend</h1>
  <div>This is homepage</div>`
  return res.status(200).send(returnHTML)
});


// router.get("/1", async (req, res) => {
//   const returnhtml=`<form action="/upload" method="post" enctype="multipart/form-data">
//   <label for="file">File:</label>
//   <input type="file" id="file" name="file" required />
//   <button style="grid-column: span 2;" type="submit">Share</button>
// </form>`
//   res.send(returnhtml)
//  });

module.exports = router;