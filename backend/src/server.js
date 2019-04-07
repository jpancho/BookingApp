const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const routes = express.Router();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
