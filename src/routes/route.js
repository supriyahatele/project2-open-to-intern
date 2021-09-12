const express = require('express');

const userController = require('../controllers/userController')
const bookController = require('../controllers/bookController')
const sportCenterController = require('../controllers/sportCenterController')
const bookingController = require('../controllers/bookingController')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/bookList', bookController.getBooks);
router.post('/createBook', bookController.createNewBook);

router.get('/userList', userController.getUsers);
router.post('/createUser', userController.createNewUser);

// Sport Center


router.post('/sportcenters', sportCenterController.registerCenter)
router.get('/sportcenters', sportCenterController.fetchCenters)
router.put('/sportcenters/:centerId', sportCenterController.updateCenter)
//router.get('/group1', sportCenterController.aggregateCenters1)
//router.get('/group2', sportCenterController.aggregateCenters2)

// Booking
router.post('/bookings', bookingController.createBooking)
router.get('/bookings/:bookingId', bookingController.getBooking)
//router.get('/bookings', bookingController.getBookings)

module.exports = router;