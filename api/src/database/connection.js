var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://teca-e566a.firebaseio.com"
});
const db=admin.database();

module.exports={
    db:db
};