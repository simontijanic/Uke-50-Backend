const express = require("express")
const app = express()

const indexRoute = require("./routes/indexRoute")

app.set("view engine", "ejs")
app.use(express.static('public'))

app.use(indexRoute)

app.listen(8000, ()=> {
    console.log("listening")
})

// Front end 10.12.14.120
// Back end 10.12.14.12110