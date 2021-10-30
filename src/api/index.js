const express = require("express");
const path = require("path");
const cors = require('cors')
// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");
require("dotenv").config();

const app = express();
app.use(cors())

console.log(
  "process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS :>> ",
  process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS
);

const options = {
  credentials: require(path.join(
    __dirname,
    process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS
  )),
  projectId: "Your Google Cloud Project ID",
};
const client = new vision.ImageAnnotatorClient(options);

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniquePrefix}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  console.log('scanning image...');
  const [result] = await client.labelDetection(req.file.path);
  res.json(result.labelAnnotations);
});

app.listen(3001, (err) => {
  if (err) return console.error(err);
  console.log("Listening on 3001");
});
