const mongoose = require("mongoose")

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/hockeyDB')
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });
}