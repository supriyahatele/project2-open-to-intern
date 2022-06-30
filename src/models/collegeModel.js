const mongoose = require('mongoose');

const collegeModel = new mongoose.Schema({

    name: {
        type: String,
        required: "Name is required",
        trim: true,
        unique: true,
        lowercase: true
    },
    fullName: {
        type: String,
        trim: true,
        required:true
    },
    logoLink: {
        required:true,
        type: String    
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
    
},{ timestamps: true })

module.exports = mongoose.model('college', collegeModel)