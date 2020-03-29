const serviceAccount = require('./../../Enviroments/FirebaseSDK-Keys.json');
var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tinder-pet-f117f.firebaseio.com"
});

module.exports = admin;