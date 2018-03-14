import CardsApi from './api';
import Hammer from 'hammerjs';
import { catDogFilter } from './sideMenu';
//keep global array of all cards that are being displayed in this session
let cardAccum = [];

const mainWrap = document.getElementsByClassName('mainWrap')[0];
const cardWrap = document.getElementById('cardWrap');
const yesnoBtn = document.querySelectorAll('.yesno');
const catDogBtn = document.querySelectorAll('.catDog');

yesnoBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		e.target.parentNode.classList.contains('yes')
			? _clickYes(catDogFilter)
			: _clickNo(catDogFilter);
	});
});
catDogBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		e.target.classList.contains('cat')
			? _clickCat(catDogFilter)
			: _clickDog(catDogFilter);
	});
});

const _clickYes = catDogFilter => {
	let topCard = cardWrap.lastChild;
	CardsApi.markCard(
		topCard.getElementsByClassName('card')[0].getAttribute('data-id'),
		'yes'
	);
	topCard.classList.add('spinOutYes');
	popCard(topCard, 'yes', catDogFilter);
};
const _clickNo = catDogFilter => {
	let topCard = cardWrap.lastChild;
	CardsApi.markCard(
		topCard.getElementsByClassName('card')[0].getAttribute('data-id'),
		'no'
	);
	topCard.classList.add('spinOutNo');
	popCard(topCard, 'no', catDogFilter);
};

const _clickCat = catDogFilter => {
	let topCard = cardWrap.lastChild;
	CardsApi.markCardCatDog(
		topCard.getElementsByClassName('card')[0].getAttribute('data-id'),
		'cat'
	);
	topCard.classList.add('spinOutYes');
	popCard(topCard, 'yes', catDogFilter);
};
const _clickDog = catDogFilter => {
	let topCard = cardWrap.lastChild;
	CardsApi.markCardCatDog(
		topCard.getElementsByClassName('card')[0].getAttribute('data-id'),
		'dog'
	);
	topCard.classList.add('spinOutYes');
	popCard(topCard, 'no', catDogFilter);
};

const popCard = (topCard, yesorno, catDogFilter) => {
	applyVoteCount(
		topCard.getElementsByClassName('card')[0].getAttribute('data-votecount'),
		yesorno
	);
	topCard.addEventListener('transitionend', e => {
		if (e.propertyName != 'transform') return;
		cardWrap.removeChild(topCard);
		_getNewCard(catDogFilter);
	});
};
const applyVoteCount = (voteCount, yesorno) => {
	let voteString = yesorno == 'yes' ? 'yays' : 'nays';
	mainWrap.getElementsByClassName(
		'voteCount'
	)[0].innerHTML = `<span class="voteInner ${yesorno}">${voteCount} ${voteString}</span>`;
	let voteInner = mainWrap.getElementsByClassName('voteInner')[0];
	setTimeout(() => {
		voteInner.classList.add('popVote');
		voteInner.addEventListener('transitionend', e => {
			//no need to hide the count anymore?
		});
	}, 100);
};

const _getNewCard = catDogFilter => {
	CardsApi.getNextCard(cardAccum, catDogFilter).then(response => {
		if (response.refresh) {
			//reached end of randomised images - empty local accum array and start again
			cardAccum = [];
			_getNewCard(catDogFilter);
			return;
		}
		_insertCard(response);
		let newCard = cardWrap.firstChild.querySelector('.card');
		_randomRotateCard(newCard);
	});
};

const _randomRotateCard = element => {
	let deg = Math.random() * (4 - -4) + -4;
	element.style.transform = `rotate(${deg}deg)`;
};

const _insertCard = (cardObj, isInitialLoad) => {
	console.log('cardObj', cardObj);
	cardWrap.insertAdjacentHTML(
		'afterbegin',
		`<div id="${cardObj._id}" class="imgWrap"><img class="card" data-votecount="${cardObj.voteCount}" data-id="${cardObj._id}" src="${cardObj.cloudinaryUrl ||
			cardObj.url}"></div>`
	);
	_initSwipeGesture(cardObj._id);
	//if it's the first load, the cardaccum array is already populated, so only do it here on each new card insert
	if (isInitialLoad) return;
	cardAccum.push(cardObj);
};

const _initSwipeGesture = cardId => {
	let theCard = document.getElementById(cardId);
	var hammertime = new Hammer(theCard);
	hammertime.on('pan', function(ev) {
		var percentage = 100 * ev.deltaX / window.innerWidth; // NEW: our % calc

		theCard.style.transform =
			'translate3d(' + percentage + '%,0,0) rotate(' + percentage / 10 + 'deg)';
		if (ev.isFinal) {
			if (ev.velocityX > 1) {
				_clickYes();
			} else if (ev.velocityX < -1) {
				_clickNo();
			} else {
				if (ev.deltaX > 100) {
					_clickYes();
				} else if (ev.deltaX < -100) {
					_clickNo();
				}
				setTimeout(() => {
					theCard.style.transform = 'translate3d(0,0,0)';
				}, 80);
			}
		}
		//theCard.style.transform = 'translateX(' + percentage + '%)'; // NEW: our CSS transform
	});
};
// const _initSwipeGesture = cardId => {
// 	let theCard = document.getElementById(cardId);
// 	let theCardImg = theCard.getElementsByClassName('card')[0];
// 	if (theCard) {
// 		let longTouch = false;
// 		let touchStartX = null;
// 		let touchMoveX = null;
// 		let moveX = null;
// 		theCard.addEventListener('touchstart', event => {
// 			setTimeout(() => {
// 				longTouch = true;
// 			}, 250);
// 			touchStartX = event.touches[0].pageX;
// 		});
// 		theCard.addEventListener('touchmove', event => {
// 			touchMoveX = event.touches[0].pageX;
// 			moveX = theCardImg.offsetWidth + (touchStartX - touchMoveX);
// 			theCard.style.transform = 'translate3d(-' + (moveX - 160) + 'px,0,0)';
// 			var panX = 100 - moveX;
// 			if (panX < 100) {
// 				// Corrects an edge-case problem where the background image moves without the container moving.
// 			}
//
// 			//GOT HALF WAY THROUGH TUTORIAL https://css-tricks.com/the-javascript-behind-touch-friendly-sliders/
// 			//ALSO LOOK AT THIS AND DO SOME CLOSUERS!!! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// 		});
// 		theCard.addEventListener('touchend', event => {
// 			let absMove = Math.abs(theCardImg.offsetWidth - moveX);
// 			if (longTouch == false) {
// 				console.log('longtouch');
// 			}
// 			theCard.style.transform = 'translate3d(-50%,0,0)';
// 		});
// 	}
// };

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
		let deg = Math.random() * (4 - -4) + -4;
		cards[i].style.transform = `rotate(${deg}deg)`;
	}
};
