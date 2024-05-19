const express = require("express")
const { verifyToken } = require("../../middleware/auth")

const router = express.Router()

const { createEvent, getEvents, getEvent, updateEvent, deleteEvent } = require("./event")

router.route("/all-events").get(verifyToken, getEvents)
router.route("/events/:id").get(verifyToken, getEvent)
router.route("/create-event").post(verifyToken, createEvent)
router.route("/update-event/:id").patch(verifyToken, updateEvent)
router.route("/delete-event/:id").delete(verifyToken, deleteEvent)
module.exports = router