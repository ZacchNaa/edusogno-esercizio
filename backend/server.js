require("dotenv").config()
const cors = require('cors')
const express = require("express")
const connectDB = require("./db/db");

//Initializations
const app = express()

//Middleware
app.use(express.json())
app.use(cors())

//Routes
app.use("/api/auth", require("./controllers/auth/route"))
app.use("/api/events", require("./controllers/events/route"))

//Server
const PORT = 5000
const server = app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})

//Connecting the Database
connectDB();