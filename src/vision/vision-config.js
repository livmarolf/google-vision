const express = require("express")
const app = express()
const path = require("path")

const multer = require("multer")
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "Images")
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})

app.post("/upload", upload.single('image'), (_req, res) => {
  res.send("Image Uploaded")
})

app.listen(3001, (err) => { 
    if (err) return console.error(err)
    console.log("Listening on 3001");
})
