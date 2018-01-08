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
			//scroll window down to get the app in view on small mobile devices
			if (window.screen.availWidth > 320 && window.screen.availWidth < 400) {
				window.scrollTo(0, 300);
			}
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

export const index = () => {
	const docStyle = document.documentElement.style;
	const aElem = document.querySelector('.enterBtn');
	const boundingClientRect = aElem.getBoundingClientRect();

	aElem.onmousemove = function(e) {
		const x = e.clientX - boundingClientRect.left;
		const y = e.clientY - boundingClientRect.top;

		const xc = boundingClientRect.width / 2;
		const yc = boundingClientRect.height / 2;

		const dx = x - xc;
		const dy = y - yc;

		docStyle.setProperty('--rx', `${dy / -1}deg`);
		docStyle.setProperty('--ry', `${dx / 10}deg`);
	};

	aElem.onmouseleave = function(e) {
		docStyle.setProperty('--ty', '0');
		docStyle.setProperty('--rx', '0');
		docStyle.setProperty('--ry', '0');
	};

	aElem.onmousedown = function(e) {
		docStyle.setProperty('--tz', '-25px');
	};

	document.body.onmouseup = function(e) {
		docStyle.setProperty('--tz', '-12px');
	};
};
