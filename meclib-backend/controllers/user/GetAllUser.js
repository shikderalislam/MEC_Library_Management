
const User = require("../../models/User")

const GetAllUser = async (req, res) => {
    try {
        const users = await User.find({})
        if(users){
            res.status(200).json({message: "success", amount: users.length, data: users})
        }
    } catch (err) {
        res.json({message: err.message})
    }
}

module.exports = GetAllUser