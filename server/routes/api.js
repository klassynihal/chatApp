const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');
const privateMessageController = require('../controllers/privateMessage.controller');
const auth = require('../modules/auth');

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('/isLoggedin', auth.isLoggedIn, userController.isLoggedin);

router.post('/message', privateMessageController.privateMessage);

module.exports = router;
