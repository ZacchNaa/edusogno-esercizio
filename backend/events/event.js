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

exports.getEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        res.status(200).json({
            message: "Events successfully fetched",
            events,
        });
    } catch (err) {
        res.status(401).json({
            message: "Events not successfully fetched",
            error: err.message,
        });
    }
}

exports.getEvent = async (req, res, next) => {
    const { id } = req.params
    try {
        if (id) {
            const event = await Event.findById(id);
            if (!event) {
                return res.status(404).json({
                    message: "Event not found",
                });
            }
            return res.status(200).json({
                message: "Event successfully fetched",
                event,
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message,
        });
    }
}


exports.updateEvent = async (req, res, next) => {
    const { id, data } = req.body


    try {
        await Event.updateOne({ _id: id }, { $set: data }).then(event =>
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
        await Event.deleteOne({ _id: id }).then(event =>
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