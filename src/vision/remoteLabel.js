// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const bucketName = 'Bucket where the file resides, e.g. my-bucket';
// const fileName = 'Path to file within bucket, e.g. path/to/image.png';

// Performs label detection on the gcs file
const [result] = await client.labelDetection(
  `gs://${bucketName}/${fileName}`
);
const labels = result.labelAnnotations;
console.log('Labels:');
labels.forEach(label => console.log(label.description));