const Request = require("../../models/RequestBook")

const UserRequests = async (req, res) => {
    const user = req.query.userid
    try {
        const requests = await Request.find({userId: user})
        if(requests){
            res.status(200).json({message: "success", amount: requests.length, data: requests})
        } else {
            res.status(404).json({message: "not found"})
        }
    } catch (err) {
        res.json({message: err.message})
    }
}

module.exports = UserRequests