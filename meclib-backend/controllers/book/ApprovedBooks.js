
const Request = require("../../models/RequestBook")

const ApprovedBooks = async (req, res) => {
    try {
        const allApproveBooks = await Request.find({isApprove: true})
        
        if(allApproveBooks){
            res.json({message: "Success", amount: allApproveBooks.length, data: allApproveBooks})
        } else {
            res.json({message: "Something went wrong"})

        }
    } catch(err) {
        res.json({message: err.message})
    }
}

module.exports = ApprovedBooks