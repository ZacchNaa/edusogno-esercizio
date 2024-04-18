const express = require("express")

const router = express.Router()

const { createEvent, updateEvent, deleteEvent } = require("./event")

router.route("/create-event").post(createEvent)
router.route("/update-event").patch(updateEvent)
router.route("/delete-event/:id").delete(deleteEvent)
module.exports = router