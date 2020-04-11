const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const BookSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	isbn: {
		type: String,
		required: true
	},
	pageCount: {
		type: Number,
		required: true
	},
	publishedDate: {
		type: String,
		required: true
	},
	thumbnailUrl: {
		type: String,
		required: true
	},
	shortDescription: {
		type: String,
		required: true
	},
	longDescription: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	authors: {
		type: Array,
		required: true
	},
	categories: {
		type: Array,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	authBio: {
		type: String,
		required: true
	},
	publisher: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	}
});

module.exports = Book = mongoose.model('book', BookSchema);
