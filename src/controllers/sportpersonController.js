const mongoose = require('mongoose')
const bookingModel = require('../models/bookingModel.js')
let sportPersonModel = require("../models/sportPersonModel.js")

let sportPerson = async function (req, res) {
    try {
        if (req.body.booking)
         {
            let newSportPerson = {}
            if (req.body.name) newSportPerson.name = req.body.name;
            if (req.body.age) newSportPerson.age = req.body.age;
            if (req.body.gender) newSportPerson.gender = req.body.gender;
            if (req.body.booking) newSportPerson.Booking = req.body.booking;

            let bookingEntity = await bookingModel.findById(req.body.booking);

            if (bookingEntity) {
                let newSportPersonCreated = await sportPersonModel.create(newSportPerson)
                res.send({ "new user created": newSportPersonCreated })
            }
            else
                res.send({ "there is no booking": " " })
        }

        else
            res.send("booking is not there ")
    }
    catch (err) {
        console.log("Error in creating new user ", err);
        res.send({ "error: ": err });
    }
}

let sportPersonId = async function(req,res){
    try 
    {
        PersonId = req.params.sportsPersonId
        let person = await sportPersonModel.findById(PersonId).populate('booking').select()
        res.send(`booking associated with personID ${PersonId} is ${person}`) 
    }
    catch(err)
    {
        console.log(`error in fetching sportPerson ${err}`)
        res.send(`error ${err}`);
    }
}
module.exports.sportPerson = sportPerson
module.exports.sportPersonId = sportPersonId
 