const path = require('path');
const opn = require('opn');
const Jimp = require('jimp');
var shortid = require('shortid');

exports.getUserApproval = (remoteUrl, res, req) => {
	return new Promise((resolve, reject) => {
		_convertImage(remoteUrl).then(newUrl => {
			let urlArr = newUrl.split('public');
			let absUtl = req.protocol + '://' + req.get('host') + '/' + urlArr[1];
			//doesnt work because we want the images t appear one after another, not all on same page
			res.write(
				`<img style="margin: 0 auto; display: block;" src="${absUtl}" />`
			);
			res.flush();
			setTimeout(() => {
				resolve();
			}, 2000);
			//wait for user feedback... then resolve?
			//may need to use websockets?
		});
	});
};

//convert image to PNG so it can be displayed in the terminal
const _convertImage = remoteUrl => {
	return new Promise((resolve, reject) => {
		Jimp.read(remoteUrl)
			.then(function(img) {
				let newUrl = `public/temp/${shortid.generate()}.png`;
				img.resize(600, Jimp.AUTO).write(newUrl, () => {
					resolve(newUrl);
				});
			})
			.catch(function(err) {
				reject(err);
			});
	});
};
