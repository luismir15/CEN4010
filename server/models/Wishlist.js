const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const Wishlist = new Schema({
	title: {
		type: String,
		required: true
	},
	isbn: {
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
	status: {
		type: String,
		required: true
	},
	authors: {
		type: String,
		required: true
	},
	categories: {
		type: String,
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
	publisher: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('wishlist', Wishlist);