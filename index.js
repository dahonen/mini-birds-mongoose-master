var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var SightingCtrl = require('./controllers/SightingCtrl');
var UserCtrl = require('./controllers/UserCtrl');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var mongoUri = "mongodb://localhost:27017/mini-birds-mongoose";
mongoose.connect(mongoUri);

mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.post('/sighting', SightingCtrl.create);
app.get('/sighting',SightingCtrl.read);
app.put('/sighting/:id',SightingCtrl.update);
app.delete('/sighting/:id',SightingCtrl.delete);

app.post('/user', UserCtrl.create);
app.get('/user',UserCtrl.read);
app.put('/user/:id',UserCtrl.update);
app.delete('/user/:id',UserCtrl.delete);

app.listen(9000, function(){
  console.log("listening to 9000");
});
