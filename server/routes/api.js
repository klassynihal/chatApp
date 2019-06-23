const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');
const privateMessageController = require('../controllers/privateMessage.controller');
const auth = require('../config/auth');

express().use((req, res, next) => {
	console.log('test');
	next();
});

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/isLoggedin', auth.isLoggedIn, userController.isLoggedin);

router.post('/message', privateMessageController.privateMessage);

module.exports = router;
