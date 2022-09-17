const GetAllUser = require('../../controllers/user/GetAllUser')
const GetUser = require('../../controllers/user/GetUser')

const router = require('express').Router()

router.get("/users", GetAllUser)
router.get("/user/:id", GetUser)


module.exports = router
