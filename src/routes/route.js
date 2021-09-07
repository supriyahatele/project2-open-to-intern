const express = require('express');

const userController = require('../controllers/userController')
const bookController = require('../controllers/bookController')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/bookList', bookController.getBooks);
router.post('/createBook', bookController.createNewBook);

router.get('/userList', userController.getUsers);
router.post('/createUser', userController.createNewUser);

module.exports = router;