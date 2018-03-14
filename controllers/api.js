const express = require('express');
const _ = require('lodash');
const router = express.Router();
const chalk = require('chalk');
const Card = require('../util/Cards');
const Vote = require('../util/Votes');

router.post('/card/getFirstCards', (req, res) => {
	Card.find({}).exec((err, cards) => {
		if (err) res.status(400).send(err);
		//shuffle the cards to get random order
		let cardsShuffled = _.shuffle(cards);
		let startingCards = [];
		cardsShuffled.forEach((card, index) => {
			//start with 3 cards only and use that random 3 card array
			if (index >= 3) return;
			startingCards.push(card);
		});
		//loop through the initial cards and use Promises to assist in retrieving the card vote count
		let promiseArr = startingCards.map(card => {
			console.log(card);
			return new Promise(resolve => {
				_getCardVoteCount(card, results => {
					card = card.toJSON();
					let cloudinaryUrl = `http://res.cloudinary.com/jaygould/image/upload/${card.imageid}`;
					card.cloudinaryUrl = cloudinaryUrl || null;
					card.voteCount = results;
					resolve(card);
				});
			});
		});
		Promise.all(promiseArr).then(values => {
			res.status(200).send(values);
		});
	});
});

router.post('/card/getNextCard', (req, res) => {
	let currentArr = _.map(req.body.cardAccum, '_id');
	let catDogFilter = req.body.catDogFilter;
	Card.find({}).exec((err, cards) => {
		if (err) res.status(400).send(err);
		let cardsShuffled = _.shuffle(cards);
		let chosenCard;

		for (let i = 0; i < cardsShuffled.length; i++) {
			if (_.includes(currentArr, String(cardsShuffled[i]._id))) {
				continue;
			}

			if (!catDogFilter.dog && cardsShuffled[i].type == 'dog') {
				continue;
			}
			if (!catDogFilter.cat && cardsShuffled[i].type == 'cat') {
				continue;
			}
			chosenCard = cardsShuffled[i];
			break;
		}
		if (chosenCard) {
			//get count of votes for chosen card
			_getCardVoteCount(chosenCard, (results, err) => {
				chosenCard = chosenCard.toJSON();
				let cloudinaryUrl = `http://res.cloudinary.com/jaygould/image/upload/${chosenCard.imageid}`;
				chosenCard.cloudinaryUrl = cloudinaryUrl || null;
				chosenCard.voteCount = results;
				res.status(200).send(chosenCard);
			});
		} else {
			res.status(200).send({ refresh: true });
		}
	});
});

router.post('/card/markCard', (req, res) => {
	let vote = new Vote();
	vote.cardid = req.body.cardid;
	vote.vote = req.body.yesorno;
	vote.save(err => {
		if (err) res.status(400).send(err);
		console.log(
			'%s the image %s has been marked.',
			chalk.green('Success: '),
			req.body.cardid
		);
		res.status(200).send(true);
	});
});

router.post('/card/markCardCatDog', (req, res) => {
	let cardId = req.body.cardid;
	let catordog = req.body.catordog;
	// Card.findById(cardId, (err, theCard) => {
	// 	console.log('CALLBACK', theCard);
	// });
	//
	// Card.findById(cardId).then(theCard => {
	// 	console.log('THEN', theCard);
	// });
	//
	//console.log('without', Card.findById(cardId));
	// console.log('with', Card.findById(cardId).exec());

	// Promise.all([Card.findById(cardId), Card.findById(cardId)]).then(resp => {
	// 	console.log('eeeeee', resp);
	// });

	// Card.findById(cardId)
	// 	.then(theCard => {
	// 		console.log('THEN', theCard);
	// 	})
	// 	.catch(err => {
	// 		console.log('ERR', err);
	// 	});

	// Card.findById(2)
	// 	.exec()
	// 	.then(theCard => {
	// 		console.log('EXEC', theCard);
	// 	})
	// 	.catch(err => {
	// 		console.log('ECEX ERR', err);
	// 	});

	// Card.findById(cardId)
	// 	.limit(10)
	// 	// .exec()
	// 	.then(theCard => {
	// 		return Card.findOneAndUpdate({ _id: theCard }, { type: catordog });
	// 	})
	// 	.then(updated => {
	// 		console.log(updated);
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 	});

	Card.find()
		.where('_id')
		.equals(cardId)
		// .exec()
		.then(theCard => {
			return Card.findOneAndUpdate({ _id: theCard }, { type: catordog });
		})
		.then(updated => {
			res.status(200).send(true);
		})
		.catch(err => {
			res.status(200).send(false);
		});
});

module.exports = router;

const _getCardVotes = (cardid, cb) => {
	Vote.find({
		cardid: cardid
	}).exec((err, results) => {
		cb(results, err);
	});
};
const _getCardVoteCount = (card, cb) => {
	_getCardVotes(card._id, (results, err) => {
		if (err) return err;
		const voteCount = results.length ? results.length : 0;
		cb(voteCount);
	});
};
