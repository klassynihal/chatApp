const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String, required: true },
	username: { type: String, unique: true, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true }
});

userSchema.methods.verifyPassword = function(userPassword, cb) {
	bcrypt.compare(userPassword, this.password, function(err, res) {
		console.log(res, 'error');
		if (err) cb(err, false);
		cb(null, res);
	});
};

userSchema.pre('save', function(next) {
	var password = this.password;
	var self = this;

	if (!this.isModified('password')) return next();
	bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
		bcrypt.hash(password, salt, function(err, hash) {
			// Store hash in your password DB.
			self.password = hash;
			next();
		});
	});
});

const User = mongoose.model('User', userSchema);

module.exports = User;
