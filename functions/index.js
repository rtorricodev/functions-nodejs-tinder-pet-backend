const Functions = require('firebase-functions');
const Express = require('./Adapters/Server/Express');
const FireSrote = require('./Adapters/Database/FireStore');
const ServerRepository = require('./Repositories/ServerReposiry');
const DataBaseRepositry = require('./Repositories/DatabaseRepository'); 

const firestore = new FireSrote();
const dataBaseRepository = new DataBaseRepositry(firestore)

const express = new Express(dataBaseRepository);
const serverReposiry = new ServerRepository(express);
serverReposiry.itializeServer();
 
exports.app = Functions.https.onRequest(serverReposiry.server.app); //this is for firebase function

