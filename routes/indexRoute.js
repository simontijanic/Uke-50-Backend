const router = require("express").Router();
const authenticate = require("../middleware/authenticate");
const { getHockeyCards } = require("../controller/hockeyCardController");
const { registerUser, loginUser } = require("../controller/userController");

router.get("/", authenticate, getHockeyCards);

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
