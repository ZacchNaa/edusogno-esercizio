const express = require("express")

const router = express.Router()

const { createEvent, getEvents, getEvent, updateEvent, deleteEvent } = require("./event")

router.route("/all-events").get(getEvents)
router.route("/events/:id").get(getEvent)
router.route("/create-event").post(createEvent)
router.route("/update-event/:id").patch(updateEvent)
router.route("/delete-event/:id").delete(deleteEvent)
module.exports = router