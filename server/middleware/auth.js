// Whenever we want a private route, we can add this middleware in the parameter for the endpoint.

const config = require('config');
const jwt = require('jsonwebtoken');

// middleware function takes req res and next
// gets token from react
function auth(req, res, next) {
	// token is located in req header
	const token = req.header('x-auth-token');

	// check for token
	if (!token) {
		// 401 means unauthorized user
		res.status(401).json({ msg: 'No token, authorization denied!' });
	}

	try {
		// Verify token
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		// take user from token and put into req.user. whenever token is sent you have user stored in req value
		// Add user from payload
		req.user = decoded;
		next();
	} catch (e) {
		res.status(400).json({ msg: 'Token is invalid!' });
	}
}

module.exports = auth;
