const mongoose = require('mongoose')
let bookModel= require("../models/bookModel.js")


//count()
//conditions inside find : and is simply sperated by ,
//  OR:   .find(   { $or : [ {cond1 } , {cond2} , {cond3} ] }  )
// { $in : [0,10,20, 30, 40, 50] }
// $eq
// {$ne: "Intro to Coding" }
// $gt:
// $lt:
// $gte:
// $lte:
// $in:
// $nin:

// sort
// select 
// limit
// findById

let getBooks= async function (req, res) {

//    // e.g for OR and $in:
    // let allBooks = await bookModel.find(  {
    //     $or: [
    //          {bookName: "Intro to Coding"} ,
    //          { sales : { $in: [0, 10, 20, 30, 40, 50] }   }
    //         //  {sales: 10}
    //         ]  
    //  }    )   

    // //  e.g for $ne:
    // let allBooks = await bookModel.find( { bookName : {$ne: "Intro to Coding" }     } )   

    // //  e.g for $gt , $gte , $lt, $lte:
    // let allBooks = await bookModel.find( {  sales : { $gt: 10 } } )   
    // let allBooks = await bookModel.find( {  sales : { $gte: 10 } } )   
    // let allBooks = await bookModel.find( {  sales : { $lt: 10 } } )   
    // let allBooks = await bookModel.find( {  sales : { $lte: 10 } } )   


    // //  e.g for $nin:  sales is not eq to 5 or 10 or 15 or 20
    // let allBooks = await bookModel.find( {  bookName: { $nin: [ "Intro to Coding", "Intro to Coding 2"] } } )   

    // let noOfBooks = await bookModel.find().count()  
    // console.log("count is :",noOfBooks)

    // //sort in ascending and descending order by a key
//      let allBooks = await bookModel.find(  ).sort({ year: -1})

//   //sort in ascending and descending order by a key
//      let allBooks = await bookModel.find(  ).sort({ year: -1})



// //  .select( "bookName year authorName" )
// let allBooks = await bookModel.find(  ).sort({ year: -1}).select( "bookName year authorName -_id" )

// //  .limit(5 )
// let allBooks = await bookModel.find(  ).sort({ year: -1}).select( "bookName year authorName -_id" ).limit(40)

//  .findById(id ) - it searches a document with that Id and returns it
let allBooks = await bookModel.findById( "123456789" )

    res.send({ "allBookDetails": allBooks })
}


let createNewBook =  async function (req, res) {
    try{
    //     bookName: String,
    // authorName: String, 
    // year
        let newBook= {}
        if (req.body.bookName) newBook.bookName = req.body.bookName;

        if (req.body.authorName) newBook.authorName = req.body.authorName;

        if (req.body.year) newBook.year = req.body.year;


        newBook.isPublished = false;

        if (req.body.tags) newBook.tags = req.body.tags;
        if (req.body.prices) newBook.prices = req.body.prices;
        if (req.body.sales) newBook.sales = req.body.sales;
        // if (req.body.tags) newBook.tags = req.body.tags;
        
        let bookCreated= await bookModel.create(newBook)
        res.send({ "new book created": bookCreated })
    }
    catch(err)
    {
        console.log("Error in creating new user ", err);
        res.send({  "error: ": err });
    }
}

module.exports.getBooks= getBooks
module.exports.createNewBook= createNewBook