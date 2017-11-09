import { loadInitialCards, randomRotateCards } from './cards';

export const startup = () => {
	const siteTitle = document.querySelector('.siteTitle');
	const cards = document.getElementById('cardWrap');
	const btnWrap = document.querySelector('.yesnoBtnWrap');

	const setImgWrapHeight = () => {
		const cards = document.getElementById('cardWrap');

		const innerHeight = document.querySelector('.imgWrap')
			? document.querySelector('.imgWrap').clientHeight
			: 0;
		cards.style.height = innerHeight + 'px';
	};

	if (document.body.classList.contains('home')) {
		loadInitialCards().then(() => {
			randomRotateCards();
			setImgWrapHeight();
			btnWrap.classList.add('show');
			cards.classList.add('show');
		});
		//animate in the elements - used to listen to the opacity event but now the promise only returns when cards are loaded anyway
		// cards.addEventListener(
		// 	'transitionend',
		// 	e => {
		// 		console.log(e);
		// 		setImgWrapHeight();
		//		btnWrap.classList.add('show');
		// 	},
		// 	false
		// );
		setTimeout(() => {
			siteTitle.classList.add('top');
		}, 1000);
	}
};
