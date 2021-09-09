const mongoose = require('mongoose')
let bookingModel = require("../models/bookingModel.js")
let sportCenterModel = require("../models/sportCenterModel.js")


// Relation between a booking and a sport center
// References vs the other approach
// documentA is related to documentB
// How to get complete documentB when we fetch documentA




let createBooking = async function (req, res) {
    try {
        if(req.body) {
            let booking = req.body
            let centerId = booking.centerId
            let center = await sportCenterModel.findById(centerId)
            console.log(`My sport center is ${center}`)
            if(center) {
                let newBooking = {
                    center : center._id,
                    bookingType : booking.bookingType
                }

                let createdBooking = await bookingModel.create(newBooking)
                res.send(`New booking succesfully created :${createdBooking}`)
            } else {
                res.send('sport center is invalid')
            }
        } else {
            res.send('not a valid create request')
        }
    }
    catch (err) {
        console.log("Error in creating the sport center ", err);
        res.send({ "error: ": err });
    }
}


let getBooking = async function (req, res) {
    try {
        let bookingId = req.params.bookingId
        let booking = await bookingModel.findById(bookingId).populate('center').select('isDeleted')
        res.send(`My booking looks something like this ${booking}`)
    } catch (error) {
        console.log(`Error created while fetching a booking documen ${error}`)
        res.send(`Error ocurred here ${error}`)
    }
}

// let getBookings = async function (req, res) {
//     try {
//         let bookings = await bookingModel.find()
//         res.send(bookings)
//     } catch (err) {
//         console.log("Error in fetching the sport center ", err);
//         res.send({ "error: ": err });
//     }

// }



//module.exports.getBookings = getBookings
module.exports.createBooking = createBooking
module.exports.getBooking = getBooking


//Things to understand about a Reference:
//Part 1 : Define a reference in one schema. This links one document of a collection to a document of another collection. (Booking to a SPort Center)
//Part 2 : Populating a reference. This ensures you have the latest data from some other collection within your current collection's document. (You Booking has the updated Sport Center details)
