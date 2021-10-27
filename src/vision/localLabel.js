import { Component } from "react";
// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");

// Creates a client
// const client = new vision.ImageAnnotatorClient();
// changed below because stack overflow said to

console.log(
  "process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS :>> ",
  process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS
);

const options = {
  credentials: require(__dirname + '/../../' + process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS),
  projectId: "Your Google Cloud Project ID",
};
const client = new vision.ImageAnnotatorClient(options);

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName =
  "/Users/livmarolf/Desktop/Devmountain/finalvisions/IMG_5505.JPG";

client.labelDetection(fileName).then((result) => {
  const labels = result[0].labelAnnotations;
  console.log("Labels:");
  labels.forEach((label) => console.log(label.description));
});
