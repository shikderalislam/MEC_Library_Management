const Request = require("../../models/RequestBook")

const allRequest = async (req, res) => {
    try {
        const requests = await Request.find({})
        if(requests){
            res.status(200).json({message: "success", data: requests, amount: requests.length})
        }
    } catch (err) {
        res.json({message: err.message})
    }
}

module.exports = allRequest