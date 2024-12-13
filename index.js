const express = require("express");
const app = express();
const cors = require("cors");

const indexRoute = require("./routes/indexRoute");
const dbController = require("./controller/dbController");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

app.use("/", indexRoute);

app.use(
  cors({
    origin: "http://10.12.14.120", // Frontend URL
    methods: ["GET", "POST"], // Allow specific methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
  })
);

app.listen(8000, () => {
    dbController.connect();
    console.log("Server is listening on port 8000");
});
