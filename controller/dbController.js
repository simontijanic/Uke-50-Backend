const mongoose = require("mongoose");
const Card = require("../models/hockeyCard");

exports.connect = () => {
  return mongoose
    .connect("mongodb://localhost:27017/hockeyDB")
    .then(() => {
      console.log("Connected to MongoDB");

      Card.find({}, (err, items) => {
        if (err) {
          console.error("Error fetching items:", err);
        } else {
          console.log("Items from the database:", items); // Check if this is an empty array
        }
      });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};
