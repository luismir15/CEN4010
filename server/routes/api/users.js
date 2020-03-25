const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// Bring in User model for querying
const User = require('../../models/User');

// @route GET api/users
// @desc Gets user info
// @access Public
router.get('/', async (req, res) => {
	const { userId } = req.query;
	const user = await User.findOne({ userId });
	res.status(200).send({ user });
});

// @route POST api/users
// @desc Register new user
// @access Public

router.post('/', async (req, res) => {
	const { name, email, userId, password, homeAddress, nickname } = req.body;

	// Simple Validation
	if (!name || !email || !userId || !password || !homeAddress || !nickname) {
		return res.status(400).json({ msg: 'Please enter all fields.' });
	}

	// Check for existing user
	const user = await User.findOne({ email });
	if (user) return res.status(400).json({ msg: 'User already exists!' });

	const newUser = new User({
		name,
		email,
		userId,
		password,
		homeAddress,
		nickname
	});

	// Create salt and hash for password
	bcrypt.genSalt(10, (err, salt) => {
		// hash password, takes in password and salt for the hash
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) throw err;
			// password becomes the hash (encrypted)
			newUser.password = hash;
			// save user into db
			newUser.save().then(user => {
				// (PAYLOAD) user id will be the token to know which user is logged in
				// this authenticates for private routes
				jwt.sign(
					{ id: user.id },
					config.get('jwtSecret'),
					// token lasts for 1 hour
					{ expiresIn: 3600 },
					(err, token) => {
						if (err) throw err;
						res.json({
							token,
							user: {
								id: user.id,
								name: user.name,
								email: user.email,
								userId: user.userId,
								homeAddress: user.homeAddress,
								nickname: user.nickname
							}
						});
					}
				);
			});
		});
	});
});

module.exports = router;
