
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const sportPersonSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    age : Number,
    gender :{type: String, enum: ["male","female","other"] },
    booking : {
        type : ObjectId,
        ref : 'Booking'
    }
})

module.exports = mongoose.model('SportPerson',sportPersonSchema);