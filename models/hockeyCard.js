const mongoose = require("mongoose")

const hockeyCardSchema = new mongoose.Schema({
    name: String,
    team: String,
    description: String,
    age: Number,
});
  
  const hockeyCard = mongoose.model('hockeyCards', hockeyCardSchema);

  module.exports = hockeyCard