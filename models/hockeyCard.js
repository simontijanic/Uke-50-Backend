const mongoose = require("mongoose")

const hockeyCardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: String, required: true },
    description: { type: String, required: true },
    age: { type: Number, min: 16, max: 120 }
  });
  
  const hockeyCard = mongoose.model('hockeyCards', hockeyCardSchema);

  module.exports = hockeyCard