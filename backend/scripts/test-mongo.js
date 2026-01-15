/* Simple MongoDB connection tester

Usage: in PowerShell:
  $env:MONGODB_URI = "your_mongodb_uri_here"; node backend/scripts/test-mongo.js

or set MONGODB_URI in your .env.local and run:
  node backend/scripts/test-mongo.js

It masks the password when logging the URI.
*/

const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('ERROR: MONGODB_URI is not set. Provide it via env var or .env.local');
  process.exit(1);
}

// Mask password for logs (best-effort; does not reveal password)
const maskedUri = uri.replace(/(mongodb(?:\+srv)?:\/\/.*?:)(.*?)(@)/, (m, p1, p2, p3) => `${p1}***${p3}`);
console.log('Testing connection to MongoDB using:', maskedUri);

mongoose
  .connect(uri, { connectTimeoutMS: 10000 })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    return mongoose.connection.close();
  })
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('MongoDB connect error:');
    console.error(err && err.message ? err.message : err);
    process.exit(1);
  });
