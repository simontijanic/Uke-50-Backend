const mongoose = require("mongoose");

exports.connect = () => {
    return mongoose.connect('mongodb://localhost:27017/hockeyDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        throw error;  // Ensure the error is thrown so it can be caught in index.js
    });
};
