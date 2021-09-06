const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    emailId: String, 
    gender: {type: String, enum: ['male', 'female']},
    age: Number

}, {timestamps: true} )


module.exports=mongoose.model('User',userSchema)


