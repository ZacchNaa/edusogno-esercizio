const User = require("../models/user")

exports.register = async (req, res, next) => {
    const { first_name, last_name, email, password } = req.body
    if (password.length < 8) {
        return res.status(400).json({ message: "Password less than 8 characters" })
    }
    try {
        await User.create({
            first_name,
            last_name,
            email,
            password,
        }).then(user =>
            res.status(200).json({
                message: "User successfully created",
                user,
            })
        )
    } catch (err) {
        res.status(401).json({
            message: "User not successful created",
            error: err.message,
        })
    }
}