const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('../config');
const jwt = require('jsonwebtoken');

// Bring in User model for querying
const User = require('../models/Users');

// @route POST api/auth
// @desc Authenticate user
// @access Public
router.post('/', async (req, res) => {
	const { userId, password } = req.body;

	// Simple Validation
	if (!userId || !password) {
		return res.status(400).json({ msg: 'Please enter all fields.' });
	}

	// Check for existing user
	const user = await User.findOne({ userId })
	if (!user) return res.status(400).json({ msg: 'User does not exist!' });

	// Validate password
	const isMatch = await bcrypt.compare(password, user.password)
	if (!isMatch) return res.status(400).json({ msg: 'Invalid Password!' });

	const token = await jwt.sign(
		{ id: user.id },
		config.get('jwtSecret'),
		// token lasts for 1 hour
		{ expiresIn: 3600 }
	);
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
});

module.exports = router;
