const route = require('./src/routes');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb+srv://asc:96321458xz@cluster0-hah9i.mongodb.net/test?retryWrites=true&w=majority');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(route);

app.listen(process.env.PORT || 3000);