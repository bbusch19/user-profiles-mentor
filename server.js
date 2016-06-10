'use strict'
const express = require('express'),
session = require('express-session'),
bodyParser = require('body-parser'),
cors = require('cors'),
config = require('./config.js'),
userCtrl = require('./controllers/userCtrl.js'), 
profileCtrl = require('./controllers/profileCtrl.js'),
app = express(),
port = 3000,
corsOptions = { origin: 'http://localhost:3000' };


//----------------------------------------------------------------------------------
// MIDDLEWARE
//----------------------------------------------------------------------------------

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'))

//----------------------------------------------------------------------------------
// ENDPOINTS
//----------------------------------------------------------------------------------

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);


app.listen(port, () => console.log(`listening on port ${port}`));
