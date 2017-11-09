exports.index = (req, res) => {
	res.render('home', {
		title: 'Swipe!',
		page: 'home'
	});
};
