const express = require("express")
const { verifyToken } = require("../../middleware/auth")

const router = express.Router()

const { register, login, resetPassword, getUsers, getUser, logout } = require("./auth")

router.route("/login").post(login);
router.route("/register").post(register)
router.route("/users").get(verifyToken, getUsers)
router.route("/users/:id").get(verifyToken, getUser)
router.route("/reset-password").post(verifyToken, resetPassword);
router.route("/logout").get(verifyToken, logout)


module.exports = router
