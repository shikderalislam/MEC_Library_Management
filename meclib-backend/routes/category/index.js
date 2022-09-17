const AddCategory = require('../../controllers/category/addCategory')
const AllCategory = require('../../controllers/category/AllCategory')


const router = require('express').Router()

router.post("/add-category", AddCategory)
router.get("/all-category", AllCategory)


module.exports = router