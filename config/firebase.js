const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = require(path.resolve(
  process.env.FIREBASE_SERVICE_ACCOUNT
));
const credential = admin.credential.cert(serviceAccount);
const databaseURL = process.env.FIREBASE_DATABASE_URL;

admin.initializeApp({
  credential,
  databaseURL,
});

const auth = admin.auth();
const db = admin.firestore();

module.exports = { auth, db };
