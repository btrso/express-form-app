// imports
var mongoose = require('mongoose');

// schema
var ClientSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true }
});

module.exports = mongoose.model('Client', ClientSchema);