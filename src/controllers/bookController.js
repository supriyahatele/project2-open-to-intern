const mongoose = require('mongoose')
let bookModel= require("../models/bookModel.js")

let getBooks= async function (req, res) {
    allBooks = await bookModel.find()  
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