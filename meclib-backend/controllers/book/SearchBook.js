const Book = require("../../models/Book")

const SearchBook = async (req, res) => {
    const {key} = req.params

    try {
        const data = await Book.find({
            "$or": [
                {name: {$regex: key, $options: 'i'}},
                {authors: {$regex: key, $options: 'i'}},
                {category: {$regex: key, $options: 'i'}},
                {subCategories: {$regex: key, $options: 'i'}},
            ]
        })
        res.json({message: "Success",  data: data})
    } catch (err){
        console.log(err.message)
    }
}

module.exports = SearchBook