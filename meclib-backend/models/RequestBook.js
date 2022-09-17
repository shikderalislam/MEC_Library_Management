const mongoose = require("mongoose")

const RequestSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    isSolve: {
        type: Boolean,
        default: false
    },
    isApprove: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    
}, {timestamps: true})

const Request = mongoose.model("Request", RequestSchema)

module.exports = Request