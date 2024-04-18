const Mongoose = require("mongoose")
const localDB = process.env.DATABASE_URL
const connectDB = async () => {
  await Mongoose.connect(localDB)
  console.log("MongoDB Connected")
}
module.exports = connectDB