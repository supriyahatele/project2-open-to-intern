const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    lname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    email: {
       
        type:String,
        required : true,
        unique : true,
        trim: true
    },
    password: {
        required: true,
        type: String
    }
    
},{ timestamps: true })

module.exports = mongoose.model('author', authorSchema)