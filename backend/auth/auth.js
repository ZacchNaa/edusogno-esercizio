const bcrypt = require("bcryptjs")
const User = require("../models/user")

exports.register = async (req, res, next) => {
    const { first_name, last_name, email, role, password } = req.body
    if (password.length < 8) {
        return res.status(400).json({ message: "Password less than 8 characters" })
    }
    bcrypt.hash(password, 10).then(async (hash) =>
        await User.create({
            first_name,
            last_name,
            email,
            role,
            password: hash,
        }).then((user) =>
            res.status(200).json({
                message: "User successfully created",
                user,
            })
        )
            .catch((error) =>
                res.status(400).json({
                    message: "User not successful created",
                    error: error.message,
                })
            ))
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            message: "email or Password not present",
        })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(401).json({
                message: "Login not successful",
                error: "User not found",
            })
        } else {
            bcrypt.compare(password, user.password).then(function (result) {
                result
                    ? res.status(200).json({
                        message: "Login successful",
                        user,
                    })
                    : res.status(400).json({ message: "Login not successful" })
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}

exports.resetPassword = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "Email or new password not provided",
        });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({
            message: "Password reset successful",
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
};