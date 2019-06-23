const jwt = require('jsonwebtoken');

const cleanUser = (user) => {
	const { _id, name, email, username } = user;
	return {
		_id,
		name,
		email,
		username
	};
};
//dont use this
const getUserFromToken = async (token) => {
	let user = null;
	await jwt.verify(token, 'secret', (err, decode) => {
		if (err) return false;
		user = decode.user;
	});
	return user;
};

const uniqueId = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);

module.exports = {
	cleanUser,
	getUserFromToken,
	uniqueId
};
