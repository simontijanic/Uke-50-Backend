const router = require("express").Router()
const hockeyCard = require("../models/hockeyCard")

router.get("/", async (req, res)=> {
    const items = await hockeyCard.find()
    try {
        const items = await hockeyCard.find()
        res.json(items); 
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
})

module.exports = router