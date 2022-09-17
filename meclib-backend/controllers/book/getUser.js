const User = require("../../models/User")

const getUser = async (req, res) => {
    const id = req.params.id
    try {

        const user = await User.findById(id)
        if(book){
            res.json({message: "Success", data: user})
        } else {
            res.json({message: "Something went wrong"})

        }
    } catch(err) {
        res.json({message: err.message})
    }
}

module.exports = getUser