const express = require('express');
const _ = require('lodash');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();
const Card = require('../util/Cards');
const scrape = require('./scraper/index');

router.get('/scrape', (req, res) => {
	const url = 'https://www.pexels.com/search/pet/';
	request(url, function(error, response, html) {
		if (!error) {
			var $ = cheerio.load(html);

			let photos = [];
			const imgWraps = $('.photos').children();
			$(imgWraps).each((i, elem) => {
				if ($(elem).attr('class') == 'photo-item') {
					let url = $(elem).find('.photo-item__img').attr('src');
					let urlSplit = url.split('?');
					photos.push(url);
				}
			});

			//send browser request here?
			//res.send('<h1>Hello world</h1>');

			//do promise based approval...
			//res.setHeader('Content-Type', 'text/html');
			let prom = Promise.resolve();
			photos.forEach(photo => {
				prom = prom.then(function() {
					return scrape.getUserApproval(photo, res, req);
				});
			});

			//console.log(photos);
		}
	});
});

// photos[i] = urlSplit[0] + '?' + urlSplit[1];
// request.get(
// 	{ url: photos[i], encoding: 'binary' },
// 	(err, response, body) => {
// 		if (err) throw err;
// 		//if user selects yes...
// 		scrape.test();
// 		fs.writeFile(`${i}.jpeg`, body, 'binary', err => {
// 			if (err) throw err;
// 		});
// 		//else
// 		//nothing....
// 	}
// );

module.exports = router;

// Inserting cards for testing
//
// let card = new Card();
// card.url = `${process.env.API_URL}/catImages/ct4.jpg`;
// card.imageid = 'q';
// card.save((err, saved) => {
// 	if (err) return console.log(err);
// 	console.log(saved);
// });
