const { Schema, model } = require('mongoose');

// Create schema
const CreditCardSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	number: {
		type: Number,
		required: true,
	},
	expirationDate: {
		type: String,
		required: true,
	},
	ccv: {
		type: Number,
		required: true,
	},
});

module.exports = CreditCard = model('creditcard', CreditCardSchema);
