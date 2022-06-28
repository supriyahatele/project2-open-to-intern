const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const blogSchema = new mongoose.Schema({

    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    authorId: {
        required: true,
        type: ObjectId,
        ref: "author"
    },
    tags: [String],

    category: {
        type: String,
        required: true
    },

    subcategory: {
        type: [String]
    },

    deletedAt: {
        type: Date
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    isPublished: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })



module.exports = mongoose.model('blogFresh', blogSchema)