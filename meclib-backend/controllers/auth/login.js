const User = require("../../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const findUser = await User.findOne({email})
        if(findUser){
            const hashedPassword = findUser.password
            const validPassword = await bcrypt.compare(password, hashedPassword)
            if(validPassword){
                const token = jwt.sign({
                    name: findUser.name,
                    email: findUser.email,
                    id: findUser._id,
                    isAdmin: findUser.isAdmin,
                    isSuperAdmin: findUser.isSuperAdmin,
                    userType: findUser.userType,
                    requestedBooks: findUser.requestBooks
                }, process.env.jwtsecret)
    
                res.status(200).json({message: "success", token: token})
            } else {
                res.json({message: "incorrect email or password", status: 401})
            }
        } else {
            res.json({message: "User not found", status: 401})
        } 
        
    } catch (err){
        console.log(err.message)
    }
}

module.exports = login