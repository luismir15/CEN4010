const express = require('express');
const router = express.Router();

// Bring in User model for querying
const User = require('../../models/User');

// @route GET api/users
// @desc Register new user
// @access Public
router.get('/', (req, res) => {
	res.send('register');
});

// // @route POST api/users
// // @desc Create a user
// // @access Public
// router.post('/', (req, res) => {
// 	const newUser = new User({
// 		name: req.body.name,
// 		email: req.body.email,
// 		password: req.body.password,
// 		homeAddress: req.body.homeAddress,
// 		nickname: req.body.nickname
// 	});

// 	newUser.save().then(user => res.json(user));
// });

// // @route DELETE api/user/:id
// // @desc DELETE a user
// // @access Public
// router.delete('/:id', (req, res) => {
// 	User.findById(req.params.id)
// 		.then(user => user.remove().then(() => res.json({ success: true })))
// 		// catch ID not in db
// 		.catch(err => res.status(404).json({ success: false }));
// });

module.exports = router;
