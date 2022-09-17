const router = require('express').Router()
const registration = require("../../controllers/auth/registration")
const login = require("../../controllers/auth/login")

router.post("/registration", registration)
router.post("/login", login)

module.exports = router