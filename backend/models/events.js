const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
  attendees: {
    type: String,
    unique: false,
    required: false,
  },
  event_name: {
    type: String,
    unique: false,
    required: true,
  },
  event_date: {
    type: Date,
    unique: true,
    required: true,
  },
})

const Event = mongoose.model("event", EventSchema)
module.exports = Event