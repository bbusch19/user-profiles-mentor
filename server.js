'use strict'
const express = require('express'),
session = require('express-session'),
bodyParser = require('body-parser'),
cors = require('cors'),
config = require('./config.js'), 
app = express(),
port = 3000,
corsOptions = { origin: 'http://localhost:8999' };

app.use(bodyParser.json());
app.use(cors(corsOptions));



app.listen(port, () => console.log(`listening on port ${port}`));
