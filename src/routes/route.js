const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/userList', userController.getUsers);
router.post('/createUser', userController.createNewUser);

module.exports = router;

