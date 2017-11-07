import CardsApi from './api';

//keep global array of all cards that are being displayed in this session
let cardAccum = [];

const mainWrap = document.getElementsByClassName('mainWrap')[0];
const cardWrap = document.getElementById('cardWrap');
const yesnoBtn = document.querySelectorAll('.yesno');

yesnoBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		e.target.classList.contains('yes') ? _clickYes() : _clickNo();
	});
});

const _clickYes = () => {
	let topCard = cardWrap.lastChild;
	CardsApi.markCard(
		topCard.getElementsByClassName('card')[0].getAttribute('data-id'),
		'yes'
	);
	topCard.classList.add('spinOutYes');
	topCard.addEventListener('transitionend', e => {
		if (e.propertyName != 'transform') return;
		cardWrap.removeChild(topCard);
		_getNewCard();
	});
};
const _clickNo = () => {
	let topCard = cardWrap.lastChild;
	CardsApi.markCard(
		topCard.getElementsByClassName('card')[0].getAttribute('data-id'),
		'no'
	);
	topCard.classList.add('spinOutNo');
	topCard.addEventListener('transitionend', e => {
		if (e.propertyName != 'transform') return;
		cardWrap.removeChild(topCard);
		_getNewCard();
	});
};

const _getNewCard = () => {
	CardsApi.getNextCard(cardAccum).then(response => {
		if (response.refresh) {
			//reached end of randomised images - empty local accum array and start again
			cardAccum = [];
			_getNewCard();
			return;
		}
		_insertCard(response);
		let newCard = cardWrap.firstChild.querySelector('.card');
		_randomRotateCard(newCard);
	});
};

const _randomRotateCard = element => {
	let deg = Math.random() * (10 - -10) + -10;
	element.style.transform = `rotate(${deg}deg)`;
};

const _insertCard = (cardObj, isInitialLoad) => {
	cardWrap.insertAdjacentHTML(
		'afterbegin',
		`<div class="imgWrap"><img class="card" data-id="${cardObj._id}" src="${cardObj.url}"></div>`
	);
	//if it's the first load, the cardaccum array is already populated, so only do it here on each new card insert
	if (isInitialLoad) return;
	cardAccum.push(cardObj);
};

export const loadInitialCards = () => {
	return new Promise(resolve => {
		CardsApi.getFirstCards().then(response => {
			//add to the global accum array with the initial loaded cards
			!cardAccum
				? (cardAccum = [cardAccum, ...response])
				: (cardAccum = [...response]);

			//loading delay to test SVG spinner
			setTimeout(() => {
				mainWrap.querySelector('.spinner').style.display = 'none';
				response.forEach(card => {
					_insertCard(card, true);
				});
				resolve();
			}, 2000);
		});
	});
};
export const randomRotateCards = () => {
	const cards = document.getElementsByClassName('card');
	for (var i = 0; i < cards.length; i++) {
		let deg = Math.random() * (10 - -10) + -10;
		cards[i].style.transform = `rotate(${deg}deg)`;
	}
};
