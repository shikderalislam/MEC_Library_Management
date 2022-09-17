
const User = require("../../models/User")

const GetUser = async (req, res) => {
    const {id} = req.params

    try {
        const findUser = await User.findById(id)
        if(findUser){
            res.json({message: "Success", data: findUser})
        } else {
            res.json({message: "Something went wrong"})

        }
    } catch(err) {
        res.json({message: err.message})
    }
}

module.exports = GetUser