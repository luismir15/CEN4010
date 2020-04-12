const { Schema, model } = require('mongoose');
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
	userId: {
		type: String,
		required: true
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
	creditCard1: {
		type: Number,
		required: false
	},
	creditCard1Date: {
		type: String,
		required: false
	},
	creditCard2: {
		type: Number,
		required: false
	},
	creditCard2Date: {
		type: String,
		required: false
	},
	shippingAddress1: {
		type: String,
		required: false
	},
	shippingAddress2: {
		type: String,
		required: false
	}
});

module.exports = User = model('user', UserSchema);
