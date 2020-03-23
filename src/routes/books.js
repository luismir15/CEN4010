const express = require('express');
const router = express.Router();

//Middleware
const auth = require('../../middleware/auth');

// Bring in Book model for querying
const Book = require('../../models/Book');

// @route GET api/books
// @desc GET all books
// @access Public
router.get('/', (req, res) => {
	Book.find()
		// sort by title desc
		.sort({ title: -1 })
		.then(books => res.json(books));
});

// @route POST api/books
// @desc Create a book
// @access Private
// Auth makes POST private (must be signed in)
router.post('/', (req, res) => {
	const newBook = new Book({
		title: req.body.title,
		author: req.body.author,
		authorBio: req.body.authorBio,
		description: req.body.description,
		genre: req.body.genre,
		publisher: req.body.publisher,
		releaseDate: req.body.releaseDate,
		rating: req.body.rating
	});

	newBook.save().then(book => res.json(book));
});

// @route DELETE api/books/:id
// @desc DELETE a book
// @access Private
// Auth makes DELETE private (must be signed in)
router.delete('/:id', (req, res) => {
	Book.findById(req.params.id)
		.then(book => book.remove().then(() => res.json({ success: true })))
		// catch ID not in db
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
