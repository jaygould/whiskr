const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');
const router = express.Router();
const scrape = require('./scraper/index');

router.get('/scrape', (req, res) => {
	const url =
		// 'http://theberry.com/2011/05/05/daily-awww-kitty-cat-cuteness-right-here-33-photos/';
		'https://stocksnap.io/search/dog/';
	request(url, function(error, response, html) {
		if (!error) {
			var $ = cheerio.load(html);
			let photos = [];
			const imgWraps = $('#main img');
			$(imgWraps).each((i, elem) => {
				//if ($(elem).attr('class') == 'wp-caption') {
				let url = $(elem).attr('src');
				console.log(url);
				photos.push(url);
				//}
			});

			//send file contaning client side socket script to begin
			res.sendFile(__dirname + '/scraper/scrape.html');

			let prom = Promise.resolve();
			let promArr = [];
			photos.forEach(photo => {
				prom = prom.then(function() {
					return scrape.getUserApproval(photo, res, req);
				});
				promArr.push(prom);
			});

			Promise.all(promArr).then(() => {
				//delete all images in temp
				scrape
					.emptyTemp()
					.then(() => {
						console.log(
							'%s all images have been processed.',
							chalk.green('Success: ')
						);
					})
					.catch(() => {
						console.log(
							'%s the target directory or file may not exist. Please check the parameters of the function or delete the temporary files manually.',
							chalk.red('Failed: ')
						);
					});
			});
		}
	});
});

module.exports = router;
