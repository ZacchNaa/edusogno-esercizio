require("dotenv").config()
const express = require("express")
const connectDB = require("./db/db");

const app = express()
app.use(express.json())
app.use("/api/auth", require("./auth/route"))
app.use("/api/events", require("./events/route"))

const PORT = 5000
const server = app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})

//Connecting the Database
connectDB();