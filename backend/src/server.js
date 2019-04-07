const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const routes = express.Router();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let Perfomer = require('./schema');
mongoose.connect('mongodb://127.0.0.1:27017/performers', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB connection established successfully");
});