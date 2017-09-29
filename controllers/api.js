const express = require('express');
const _ = require('lodash');
const router = express.Router();
const Card = require('../util/Cards');

router.post('/card/getFirstCards', (req, res) => {
	Card.find({}).exec((err, cards) => {
		if (err) res.status(400).send(err);
		//randomly sort cards and send back the first few random for initial view
		let cardsShuffled = _.shuffle(cards);
		let startingCards = [];
		cardsShuffled.forEach((card, index) => {
			if (index >= 2) return;
			startingCards.push(card);
		});
		res.status(200).send(startingCards);
	});
});

router.post('/card/getNextCard', (req, res) => {
	let currentArr = _.map(req.body.cardAccum, '_id');
	Card.find({}).exec((err, cards) => {
		if (err) res.status(400).send(err);
		let cardsShuffled = _.shuffle(cards);
		let chosenCard;

		for (let i = 0; i < cardsShuffled.length; i++) {
			if (_.includes(currentArr, String(cardsShuffled[i]._id))) {
				continue;
			}
			chosenCard = cardsShuffled[i];
			break;
		}
		chosenCard
			? res.status(200).send(chosenCard)
			: res.status(200).send({ refresh: true });
	});
});

router.post('/card/markCard', (req, res) => {
	console.log('mark card');
	res.send('');
});

module.exports = router;

// Inserting cards for testing
//
// let card = new Card();
// card.url = `${process.env.API_URL}/catImages/ct4.jpg`;
// card.imageid = 'q';
// card.save((err, saved) => {
// 	if (err) return console.log(err);
// 	console.log(saved);
// });
