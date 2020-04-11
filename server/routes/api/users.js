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

	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = new User({
		name,
		email,
		userId,
		password: hashedPassword,
		homeAddress,
		nickname,
	});

	await newUser.save();

	const token = await jwt.sign({ userId }, config.get('jwtSecret'), {
		expiresIn: 3600,
	});

	res.json({
		token,
		user: newUser,
	});
});

router.put('/', async (req, res) => {
	const {
		name,
		email,
		userId,
		password,
		homeAddress,
		creditCard1,
		creditCard1Date,
		creditCard2,
		creditCard2Date,
		shippingAddress1,
		shippingAddress2,
		nickname,
	} = req.body;

	const hashedPassword = await bcrypt.hash(password, 10);

	const updatedUser = await User.findOneAndUpdate(
		{ userId },
		{
			name,
			email,
			password: hashedPassword,
			homeAddress,
			nickname,
			creditCard1,
			creditCard1Date,
			creditCard2,
			creditCard2Date,
			shippingAddress1,
			shippingAddress2,
		}
	);

	await updatedUser.save();

	return updatedUser;
});

module.exports = router;
