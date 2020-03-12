const functions = require('firebase-functions');
var admin = require('firebase-admin');

var express = require('express');
var app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(cors());


app.get('/', function (req, res) {
    res.send('The api works');
});
  
exports.app = functions.https.onRequest(app);

