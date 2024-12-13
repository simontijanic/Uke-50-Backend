const router = require("express").Router();
const hockeyCard = require("../models/hockeyCard");

router.get("/", async (req, res) => {
  try {
    const items = await hockeyCard.find();
    console.log("Items from the database:", items);  // Log the items fetched from DB
    if (items.length === 0) {
      console.log("No items found in the database.");
    }
    res.json(items);
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

module.exports = router;
