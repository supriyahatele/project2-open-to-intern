const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    
    bookName: String,
    authorName: String, 
    year : Number,
    isPublished: Boolean,
    tags: [ String ],
    prices:
        {
            indianPrice : String,
            europePrice : String
        } ,

    sales: {type: Number, default: 10}
    


// required :
// unique :
// default

// String
// Number
// Date
// Boolean (true/ false)

// Objects
// Array

// ObjectId
// Buffer

}, {timestamps: true} )

module.exports=mongoose.model('Book',bookSchema)