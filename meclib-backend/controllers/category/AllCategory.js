const Category = require("../../models/Category")

const AllCategory = async (req, res) => {

    try {
        const allCategory = await Category.find({})
        res.status(200).json({data: allCategory, length: allCategory.length})
    } catch(err) {
        res.json({message: err.message})
    }
}

module.exports = AllCategory