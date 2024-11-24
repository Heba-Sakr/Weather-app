const mongoose = require('mongoose');
// Storing the city name
const locationSchema = new mongoose.Schema({
  name: { type: String, required: true } 
});

module.exports = mongoose.model('Location', locationSchema);
