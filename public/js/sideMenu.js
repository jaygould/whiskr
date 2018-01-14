export let catDogFilter = {
	cat: true,
	dog: true
};
export const sideMenu = () => {
	const menuBtn = document.querySelector('.openNav');
	const closeBtn = document.querySelector('.closeSideMenu');
	const innerSideMenu = document.querySelector('#sideMenu .inner');
	const catFilter = document.getElementById('catFilter');
	const dogFilter = document.getElementById('dogFilter');
	menuBtn.addEventListener('click', () => {
		document.getElementById('sideMenu').classList.add('open');
		setTimeout(() => {
			innerSideMenu.classList.add('innerOpen');
		}, 500);
	});
	closeBtn.addEventListener('click', () => {
		document.getElementById('sideMenu').classList.remove('open');
		innerSideMenu.classList.remove('innerOpen');
	});

	catFilter.addEventListener('click', e => {
		catDogFilter.cat = e.srcElement.checked ? true : false;
		if (!catDogFilter.cat && !catDogFilter.dog) {
			e.stopPropagation();
			e.preventDefault();
		}
	});
	dogFilter.addEventListener('click', e => {
		catDogFilter.dog = e.srcElement.checked ? true : false;
		if (!catDogFilter.cat && !catDogFilter.dog) {
			e.stopPropagation();
			e.preventDefault();
		}
	});
};
