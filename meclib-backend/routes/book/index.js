const router = require('express').Router()

const addNewBook = require('../../controllers/book/addNewBook')
const ApproveBookRequest = require('../../controllers/book/ApproveBookRequest')
const GetAllBooks = require('../../controllers/book/GetAllBooks')
const GetABook = require('../../controllers/book/GetABook')
const allRequest = require('../../controllers/book/GetAllRequest')
const requestBook = require('../../controllers/book/requestBook')
const ApprovedBooks = require('../../controllers/book/ApprovedBooks')
const SearchBook = require('../../controllers/book/SearchBook')
const DeleteBook = require('../../controllers/book/deleteABook')
const DeleteBookRequest = require('../../controllers/book/deleteBookRequest')
const UpdateBook = require('../../controllers/book/UpdateBook')
const UserRequests = require('../../controllers/book/GetUserBookRequest')
const RequestCheck = require('../../controllers/book/CheckRequest')
const getUser = require('../../controllers/book/getUser')
const returnBook = require('../../controllers/book/returnBook')



router.get("/book/:id", GetABook)
router.get("/user/:id", getUser)
router.delete("/delete-book/:id", DeleteBook)
router.put("/update-book/:id", UpdateBook)
router.delete("/delete-request/:id", DeleteBookRequest)
router.get("/search/:key", SearchBook)
router.get("/approved-books", ApprovedBooks)
router.get("/all-books/:category", GetAllBooks)
router.get("/all-request", allRequest)
router.get("/request-check", RequestCheck)
router.get("/user-requests", UserRequests)
router.post("/request-book", requestBook)
router.post("/new-book", addNewBook)
router.post("/approve-book", ApproveBookRequest)
router.put("/return-book/:id",returnBook);




module.exports = router
