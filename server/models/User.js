const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	homeAddress: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
	creditCards: {
		type: Array,
		default: []
	},
	shippingAddresses: {
		type: Array,
		default: []
	}
});

module.exports = User = mongoose.model('user', UserSchema);
