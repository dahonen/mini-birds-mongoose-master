var mongoose = require('mongoose');
var Bird = require('./Bird');

var sightingSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  bird: [Bird],
  confirmed: {type: 'Boolean', default: false},
  numberSeen: {type: 'Number', min: 1}
});

module.exports = mongoose.model('Sighting', sightingSchema);
