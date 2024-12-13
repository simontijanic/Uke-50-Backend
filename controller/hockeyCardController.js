const hockeyCard = require("../models/hockeyCard");

const getHockeyCards = async (req, res) => {
  try {
    const items = await hockeyCard.find();
    if (items.length === 0) {
      console.log("No items found in the database.");
    }
    res.json(items);
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ error: "Failed to fetch items" });
  }
};

module.exports = {
  getHockeyCards
};
