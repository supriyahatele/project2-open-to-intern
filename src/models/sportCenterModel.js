const mongoose = require('mongoose')

const sportCenterSchema = new mongoose.Schema({

    name: { type: String, required: true, unique: true },
    city: String,
    state: String,
    sports: [String],
    address: Object,
    isOpen: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('SportCenter', sportCenterSchema)