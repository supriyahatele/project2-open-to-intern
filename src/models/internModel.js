const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

// ObjectId is the  id from another schema we r taking as ref
const InternModel= new mongoose.Schema({
    name: {
        type:String,
        require:"name is mandatory"
    },
    email : {
        type : String,
        required : "Email is required",
        unique : true,
        trim:true,
        lowercase:true,
      },
    mobile: {
        type:Number,
        require:"mobile number required",
        unique:true,
        trim:true
    }, 
    collegeId: {
        type:ObjectId,
        ref:'college',
    },
    isDeleted: {
        type:Boolean,
        default:false
    }}
    , { timestamps: true })



module.exports = mongoose.model('Intern', InternModel)
