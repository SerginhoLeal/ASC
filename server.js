const route = require('./src/routes');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost/Game');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(route);

app.listen(process.env.PORT || 3000);