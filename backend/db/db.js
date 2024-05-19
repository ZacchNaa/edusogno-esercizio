const Mongoose = require("mongoose")
const localDB = process.env.DATABASE_URL
const connectDB = async () => {
  try {
    await Mongoose.connect(localDB)
  console.log("MongoDB Connected")
  } catch (error) {
    console.log(error)
  }
}
module.exports = connectDB