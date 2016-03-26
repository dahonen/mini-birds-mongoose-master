var Sighting = require('./../models/Sighting');

module.exports = {
  create: function(req, res) {
    var newSighting = new Sighting(req.body);
    newSighting.save(function(err, result){
      res.send(result);
    });
  },
  read: function(req, res) {
    Sighting
    .find(req.query)
    .populate('user')
    .exec(function (err, result) {
      res.send(result);
    });
  },
  update: function(req, res){
    Sighting
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      res.send(result);
    });
  },
  delete: function(req, res){
    Sighting
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      res.send(result);
    });
  }
};
