const Event = require("../models/events")

exports.createEvent = async (req, res, next) => {
    const { attendees, event_name, event_date } = req.body
    
    try {
        await Event.create({
            attendees,
            event_name,
            event_date,
        }).then(event =>
            res.status(200).json({
                message: "Event successfully created",
                event,
            })
        )
    } catch (err) {
        res.status(401).json({
            message: "Event not successful created",
            error: err.message,
        })
    }
}
exports.updateEvent = async (req, res, next) => {
    const { id, data } = req.body

    
    try {
        await Event.updateOne({_id:id},{$set: data}).then(event =>
            res.status(200).json({
                message: "Event successfully updated",
                event,
            })
        )
    } catch (err) {
        res.status(401).json({
            message: "Event not successful updated",
            error: err.message,
        })
    }
}

exports.deleteEvent = async (req, res, next) => {
    const { id } = req.params
    
    try {
        await Event.deleteOne({_id:id}).then(event =>
            res.status(200).json({
                message: "Event successfully deleted",
                event,
            })
        )
    } catch (err) {
        res.status(401).json({
            message: "Event not successful deleted",
            error: err.message,
        })
    }
}