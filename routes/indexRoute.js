const router = require("express").Router();
const hockeyCard = require("../models/hockeyCard");

router.get("/", async (req, res) => {
    try {
        const items = await hockeyCard.find();
        console.log(items, "Found items");
        res.json(items); // Send the data as JSON
    } catch (err) {
        console.error("Error fetching items:", err);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});

module.exports = router;
