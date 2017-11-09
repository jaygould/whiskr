var scraper = require('command-scraper');

// 1. URL to scrape
// 2. parent class to search for
// 3. image class to search for within parent
// 4. permanent directory to save scraped image
scraper(
	'https://www.jaygould.co.uk/dev/2017/09/28/asynchronous-javascript-promises-async-observables-examples.html',
	'.post-content',
	'.center',
	'public/catImages',
	false,
	function(imgUrl) {
		//image saved
		console.log(imgUrl);
	}
);
