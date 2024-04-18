const express = require("express")

const router = express.Router()

const { register, login, resetPassword } = require("./auth")

router.route("/register").post(register)
router.route("/login").post(login);
router.route("/reset-password").post(resetPassword);
module.exports = router