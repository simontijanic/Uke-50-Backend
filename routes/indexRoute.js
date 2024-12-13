const router = require("express").Router()
const hockeyCard = require("../models/hockeyCard")

router.get("/", async (req, res)=> {
    const items = await hockeyCard.find()
    res.render("index", {items})
})

module.exports = router