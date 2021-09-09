const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookingSchema = new mongoose.Schema({

    center: {
        type : ObjectId,
        ref: 'SportCenter'
    },
    bookingType: {type: String, enum: ['private', 'group']},
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Booking', bookingSchema)