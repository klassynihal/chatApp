const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
	passport.use(
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password'
			},
			function(email, password, done) {
				User.findOne({ email: email }, (err, user) => {
					err, user, 'find';
					if (err) {
						return done(err);
					}
					if (!user) {
						return done(null, false);
					}
					if (user.comparePassword(password)) {
						return done(null, user);
					} else return done(null, false);
				});
			}
		)
	);
};
