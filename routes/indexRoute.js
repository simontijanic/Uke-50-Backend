const router = require("express").Router();
const hockeyCard = require("../models/hockeyCard");
const User = require("../models/userSchema");
const authenticate = require("../middleware/authenticate")

router.get("/", authenticate, async (req, res) => {
  try {
    const items = await hockeyCard.find();
    console.log("Items from the database:", items); // Log the items fetched from DB
    if (items.length === 0) {
      console.log("No items found in the database.");
    }
    res.json(items);
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const newUser = new User({ username, password, role });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error registering user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user)
      return res.status(401).json({ error: "Invalid username or password" });

    const token = jwt.sign(
      { id: user._id, role: user.role }, // Payload
      "secret-key", // Bytt ut med en sikker nøkkel (og lagre i .env)
      { expiresIn: "1h" } // Token varer i 1 time
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Error logging in" });
  }
});

module.exports = router;
