const mongoose = require('mongoose')
let userModel= require("../models/userModel.js")
let bookModel= require("../models/bookModel.js")

let getBooks= async function (req, res) {
    allBooks = await bookModel.find()  
    res.send({ "allBookDetails": allBooks })
}

let getUsers= async function (req, res) {
    
    let a = 5
    let b = 3
    let c = a + b
    let users=  await userModel.find()  // is executed but not completed..await signals that please dont execute next line till this line is completed..i.e await is asking the program to wait for completion of this line

    //async-await 

// When is await used: -
    // when interacting with database
    // when interacting with another server( axios/ request)

    console.log("OUR DATA IS HERE", users)  // promise pending if we dont use await

    allUsers = await userModel.find()  
    res.send({ "allUserDetails": allUsers })
}

let createNewUser =  async function (req, res) {
    try{
        let newUser= {}
        if (req.body.firstName) newUser.firstName = req.body.firstName;
        if (req.body.lastName) newUser.lastName = req.body.lastName;
        if (req.body.mobile) newUser.mobile = req.body.mobile;
        if (req.body.email) newUser.email = req.body.email;
        if (req.body.gender) newUser.gender = req.body.gender;
        
        let userCreated= await userModel.create(newUser)
        res.send({ "new user created": userCreated })
    }
    catch(err)
    {
        console.log("Error in creating new user ", err);
        res.send({  "error: ": err });
    }
}

module.exports.getBooks= getBooks
module.exports.getUsers= getUsers
module.exports.createNewUser= createNewUser