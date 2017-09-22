import { randomRotateCards } from './cards';

//Todo: use startup to load images from DB?

export const startup = () => {
	const siteTitle = document.querySelector('.siteTitle');
	const cards = document.getElementById('cardWrap');
	const btnWrap = document.querySelector('.yesnoBtnWrap');

	const setImgWrapHeight = () => {
		const cards = document.getElementById('cardWrap');
		const innerHeight = document.querySelector('.imgWrap').clientHeight;
		cards.style.height = innerHeight + 'px';
	};

	if (document.body.classList.contains('Home')) {
		randomRotateCards();
		cards.addEventListener(
			'transitionend',
			() => {
				setImgWrapHeight();
				btnWrap.classList.add('show');
			},
			false
		);
		setTimeout(() => {
			siteTitle.classList.add('top');
		}, 1000);
		setTimeout(() => {
			cards.classList.add('show');
		}, 1200);
	}
};
