const friendsController = require('./controllers/friends');


const friendsRouter = require("./routes/friends");

const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
