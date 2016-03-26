var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  username: {type: String, unique: true, required: true, index: true},
  level: {type: Number, min: 1, max: 100},
  location: {type: String},
  member: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);
