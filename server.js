const express = require('express')
const colors = require('colors')
const cors = require('cors')
const helmet = require("helmet")
const morgan = require("morgan")

const multer = require("multer")
const uploadPost=multer({dest: "postPictureUploads"})


const connectDB = require('./config/db')

require('dotenv').config()

connectDB()

const app = express()

const port = process.env.PORT || 8095

app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

const home = require("./routes/home")
const allroutes = require("./routes/routes")
app.use("/", home)
app.use('/api', allroutes)




const File = require("./models/File")
app.post("/upload", upload.single("file"), async (req, res) => {
    const fileData = {
      path: req.file.path,
      originalName: req.file.originalname,
    }
    const file = await File.create(fileData)
    res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` })
  })


//   app.route("/file/:id").get(handleDownload)

// async function handleDownload(req, res) {
//   const file = await File.findById(req.params.id)
//   await file.save()
//   res.download(file.path, file.originalName)
// }



app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

