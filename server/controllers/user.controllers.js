const User = require('../models/User');
// const passport = require('passport');

module.exports = {
	signup: (req, res) => {
		const { name, username, email, password } = req.body;
		const newUser = new User({ name, username, email, password });
		newUser.save((err, data) => {
			if (err) throw err;
			else {
				return res.status(200).json({
					status: true,
					message: 'signup successfull'
				});
			}
		});
	},

	login: (req, res, next) => {
		console.log(req.body, 'req.user');
		//figure our which tech would be good JWT or session based
		// FrontEnd is Already created Taking JWT as Option
	},

	isLoggedin: (req, res) => {
		//if JWT use id from Token
		User.findOne({ id: req.user._id }, { password: 0 }, function(err, user) {
			if (err) throw err;
			return res.status(200).json({
				status: true,
				user: user
			});
		});
	},

	listOfUser: (req, res) => {
		User.find({}, { name: 1, username: 1 }, (err, users) => {
			if (err) throw err;
			else
				return res.status(200).json({
					status: true,
					listOfUser: users
				});
		});
	}
};
