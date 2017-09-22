export const randomRotateCards = () => {
	const cards = document.getElementsByClassName('card');
	for (var i = 0; i < cards.length; i++) {
		let deg = Math.random() * (10 - -10) + -10;
		cards[i].style.transform = `rotate(${deg}deg)`;
	}
};
