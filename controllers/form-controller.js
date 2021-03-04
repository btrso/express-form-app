// import models
var Client = require('../models/client-model');

// add cases
exports.get_form = function(req, res, next){
  res.render('index', { title: 'Registration' });
};

exports.post_form = function(req, res, next){
  var client = new Client({
      first_name: req.body.first_name,
      last_name: req.body.last_name
  })
  client.save();
  res.send('okay').end();
};
