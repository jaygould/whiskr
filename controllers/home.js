exports.index = (req, res) => {
	res.render('home', {
		title: 'Swipe!',
		page: 'home',
		isAdmin: req.url === '/home/admin' ? true : false
	});
};
