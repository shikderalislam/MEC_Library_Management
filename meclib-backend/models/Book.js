const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bookImageURL: {
        type: String
    },
    shortDescription: {
        type: String
    },
    publishers: {
        type: Array,
    },
    authors: {
        type: Array
    },
    edition: {
        type: String
    },
    quantity: {
        type: Number,
        default: 1
    },
    category: {
        type: String
    },
    subCategories: {
        type: Array
    },
    uniqueid: {
        type: String,
        
    },

    date: {
        type: Date,
        default: Date.now()
    },
    
}, {timestamps: true})

const Book = mongoose.model("Book", BookSchema)

module.exports = Book