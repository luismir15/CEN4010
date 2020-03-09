const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const BookSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	authorBio: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	publisher: {
		type: String,
		required: true
	},
	releaseDate: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	}
});

module.exports = Book = mongoose.model('book', BookSchema);
