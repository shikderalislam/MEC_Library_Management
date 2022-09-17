const User = require("../../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registration = async (req, res) => {
    const {name, email, password, isSuperAdmin, isAdmin, userType} = req.body
    try {
        
        const checkUser = await User.findOne({email})
        if(!checkUser){
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            const newUser = new User({
                name,
                email,
                password: hashPassword,
                isSuperAdmin,
                isAdmin,
                userType
            })
            const saveUser = await newUser.save()
            
            const token = jwt.sign({
                name: saveUser.name,
                email: saveUser.email,
                id: saveUser._id,
                isAdmin: saveUser.isAdmin,
                isSuperAdmin: saveUser.isSuperAdmin,
                userType: saveUser.userType,
                requestedBooks: saveUser.requestBooks
            }, process.env.jwtsecret)

            res.status(200).json({message: "Account created", token: token})
        }
        if(checkUser){
            res.json({message: "User exists", status: 406})
            
        }
    } catch (err){
        console.log(err.message)
    }
}

module.exports = registration