const mongoose = require('mongoose')
let sportCenterModel = require("../models/sportCenterModel.js")


// let registerCenter = async function (req, res) {
//     try {
//         if (req.body) {
//             let center = req.body
//             let newCenter = {
//                 name: center.name,
//                 city: center.city,
//                 state: center.state,
//                 sports: center.sports
//             }
//             let createdCenter = await sportCenterModel.create(newCenter)
//             res.send(`You have successfully registered the following sport center: ${createdCenter}`)
//         } else {
//             res.send("not a valid create request")
//         }
//     }
//     catch (err) {
//         console.log("Error in creating the sport center ", err);
//         res.send({ "error: ": err });
//     }
// }

let fetchCenters = async function (req, res) {
    try {
        //Find the center by name
        //If there is no query param then the request is not valid
        // let cityName = req.query.city
        // let regex = new RegExp(`.*${cityName}.*`, 'i')
        // console.log(cityName)
        //let centers = cityName ? await sportCenterModel.find({ city: 'Ankleshwar' }) : await sportCenterModel.find()
        let centers = await sportCenterModel.find()
        if (centers) {
            res.send({ data: centers })
        } else {
            res.send(`center not found`)
        }
    } catch (err) {
        console.log("Error in fetching the sport center ", err);
        res.send({ "error: ": err });
    }

}

// let updateCenter = async function (req, res) {
//     try {
//         // let cityName = req.query.city
//         // let regex = new RegExp(`.*${cityName}.*`, 'i')
//         // console.log(cityName)
//         let centerId = req.params.centerId
//         let updatedCenters = await sportCenterModel.findOneAndUpdate({ _id: centerId, 'sports.id':1 },{$set: {'sports.$[]': 'Badminton'}},{new: true})
//         res.send({ data: updatedCenters })
//     } catch (error) {
//         console.log("Error in updating the sport centers", error);
//         res.send({ "error: ": error });
//     }

// }

//module.exports.registerCenter = registerCenter
module.exports.fetchCenters = fetchCenters
//module.exports.updateCenter = updateCenter