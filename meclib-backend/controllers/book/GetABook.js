const Book = require("../../models/Book")
const User = require("../../models/User")

const GetABook = async (req, res) => {
    const id = req.params.id
    try {

        const book = await Book.findById(id)
        if(book){
            res.json({message: "Success", data: book})
        } else {
            res.json({message: "Something went wrong"})

        }
    } catch(err) {
        res.json({message: err.message})
    }
}

module.exports = GetABook