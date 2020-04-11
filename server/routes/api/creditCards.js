const express = require('express');
const router = express.Router();

const CreditCard = require('../../models/CreditCard');

router.get('/', async (req, res) => {
	const { userId } = req.query;
	const creditCards = await CreditCard.find({ userId });
	res.status(200).send({ creditCards });
});

router.put('/', async (req, res) => {
	const { creditCard, userId } = req.body;

	const updatedCreditCard = await CreditCard.findOneAndUpdate(
		{ userId },
		creditCard,
		{ upsert: true }
	);
	res.status(200).send();
	await updatedCreditCard.save();

	return updatedCreditCard;
});

module.exports = router;
