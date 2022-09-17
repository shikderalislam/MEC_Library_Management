const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    maxBookRequest: {
        type: Number,
        default: 5
    },
    requestBooks: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now()
    },
    userType: {
        type: String,
        default: "student"
    },
    isSuperAdmin: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

}, {timestamps: true})

const User = mongoose.model("User", UserSchema)

module.exports = User