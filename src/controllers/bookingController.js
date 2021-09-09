const mongoose = require('mongoose')
let bookingModel = require("../models/bookingModel.js")
let sportCenterModel = require("../models/sportCenterModel.js")


// Relation between a booking and a sport center
// References vs the other approach
// documentA is related to documentB
// How to get complete documentB when we fetch documentA




// let createBooking = async function (req, res) {
//     try {
//         if(req.body) {
//             let booking = req.body
//             let centerId = booking.centerId
//             let center = await sportCenterModel.findById(centerId)
//             if(center) {
//                 let newBooking = {}
//                 newBooking.center = center._id
//                 newBooking.bookingType = booking.bookingType
//                 let createdBooking = await bookingModel.create(newBooking)
//                 res.send(`New booking succesfully created :${createdBooking}`)
//             } else {
//                 res.send('sport center is invalid')
//             }
//         } else {
//             res.send('not a valid create request')
//         }
//     }
//     catch (err) {
//         console.log("Error in creating the sport center ", err);
//         res.send({ "error: ": err });
//     }
// }

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
//module.exports.createBooking = createBooking
