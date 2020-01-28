const route = require('./src/routes');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true
    }
);

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(route);

app.listen(3000);