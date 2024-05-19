const bcrypt = require("bcryptjs")
const User = require("../../models/user")
const { hashData, verifyHashedData } = require("../../utils/hashData")
const { createToken } = require("../../utils/createToken")

exports.register = async (req, res, next) => {
    try {
        const { first_name: firstName, last_name: lastName, email: _email, role: _role, password } = req.body

        // validate fields
        if (!firstName || !lastName || !_email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        // validate password
        if (password.length < 8) {
            return res.status(400).json({ message: "Password less than 8 characters" })
        }

        // validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(_email)) {
            return res.status(400).json({ message: "Invalid email" })
        }

        // check if user already exists
        const user = await User.findOne({ _email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        // hash password
        const hashedPassword = await hashData(password)

        // create user
        const newUser = new User({
            first_name: firstName,
            last_name: lastName,
            email: _email,
            role: _role,
            password: hashedPassword,
        })

        // save user
        const createdUser = await newUser.save()
        const { first_name, last_name, email, role, _id } = createdUser
        return res.status(200).json({
            message: "User successfully created",
            details: { first_name, last_name, email, role, _id },
        })
    } catch (error) {
        res.status(400).json({
            message: "User not successful created",
            error: error.message,
        })
    }
}

exports.login = async (req, res, next) => {

    try {
        const { email: UserEmail, password } = req.body

        if (!UserEmail || !password) {
            return res.status(400).json({
                message: "email or Password not present",
            })
        }

        // check if user exists
        const user = await User.findOne({ email: UserEmail })


        if (!user) {
            return res.status(401).json({
                message: "User not found",
            })
        }

        const matchedPassword = await verifyHashedData(password, user.password)

        if (!matchedPassword) {
            return res.status(401).json({
                message: "Password does not match",
            })
        }

        const { first_name, last_name, email, role, _id } = user

        const tokenData = { first_name, last_name, email, role, _id }
        const _token = createToken(tokenData)

        return res.status(200).json({
            message: "Login successful",
            details: { first_name, last_name, email, role, _id, token: _token },
        })
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
        const { first_name, last_name, role, _id } = user

        const hashedPassword = await bcrypt.hash(password, 10);

        user.password = hashedPassword;
        await user.save();


        return res.status(200).json({
            message: "Password reset successful",
            details: { first_name, last_name, role, _id }
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
};

exports.logout = async (req, res, next) => {
    res.status(200).json({
        message: "Logout successful",
    });
}

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            message: "Users successfully fetched",
            details: users
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
}

exports.getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        return res.status(200).json({
            message: "User successfully fetched",
            details: user
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
}