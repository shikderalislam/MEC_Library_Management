const Category = require("../../models/Category")

const AddCategory = async (req, res) => {
    const {category} = req.body

    try {
        
        const newCategory = new Category({
            category: category
        })
        const saved = newCategory.save()
        if(saved){
            res.status(201).json({message: "Success"})
        } else {
            res.status(406).json({message: "Something went wrong"})
        }
    } catch(err){
        console.log(err.message)
    }
}

module.exports = AddCategory