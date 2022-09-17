const Book = require("../../models/Book")
const Request = require("../../models/RequestBook")
const User = require("../../models/User")

const ApproveBookRequest = async (req, res) => {
    const {requestId, userId} = req.body
    try {
        const checkAdmin = await User.findById({_id: userId})
 
        if(checkAdmin?.isSuperAdmin || checkAdmin?.isAdmin){
            const findRequest = await Request.findById({_id: requestId})
            if(findRequest){
                findRequest.isApprove = true
                await findRequest.save()
                res.json({message: "Request approved"})
            }
        } else {
            res.json({message: "Super-admin and admin can approve book request"})
        }
    } catch (err){
        console.log(err.message)
    }
}

module.exports = ApproveBookRequest