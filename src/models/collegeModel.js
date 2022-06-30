
const mongoose = require('mongoose');

const collegeModel = new mongoose.Schema({
// new mongoose.Schema creates new mongoose schema with object
    name: {
        type: String,
        required:true,
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