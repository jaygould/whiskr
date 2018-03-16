const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const request = require('request');
const Jimp = require('jimp');
const shortid = require('shortid');
const inquirer = require('inquirer');
const Card = require('../../util/Cards');
var cloudinary = require('cloudinary');

cloudinary.config({
	cloud_name: 'jaygould',
	api_key: '261729422894596',
	api_secret: 'R3_WejsZ2f6ll5KhUBu1paVT-kw'
});

exports.getUserApproval = (remoteUrl, res, req) => {
	return new Promise((resolve, reject) => {
		_convertImage(remoteUrl)
			.then(newUrl => {
				let urlArr = newUrl.split('public');
				let absUtl = process.env.API_URL + '/' + urlArr[1];

				//send image to browser
				let io = req.app.get('socketio');
				io.emit('img', { imageUrl: absUtl, imageName: urlArr[1] });

				//begin user input into terminal
				var question = [
					{
						type: 'confirm',
						name: 'keepImage',
						message: 'Keep image?',
						default: false
					}
				];
				inquirer.prompt(question).then(function(answers) {
					if (answers.keepImage) {
						return _saveImage(absUtl, () => {
							resolve('saved');
						});
					}
					//resolve and move to next question
					resolve('skipped');
				});
			})
			.catch(e => {
				console.log(e);
				console.log(
					'%s there has been a problem with the image conversion. Please check the images or content you\'re scraping',
					chalk.red('Failed: ')
				);
			});
	});
};

exports.emptyTemp = () => {
	return new Promise((resolve, reject) => {
		const tempDir = 'public/temp';
		fs.readdir(tempDir, (err, files) => {
			try {
				if (err) throw err;
				for (const file of files) {
					fs.unlink(path.join(tempDir, file), err => {
						if (err) throw err;
						resolve();
					});
				}
			} catch (err) {
				reject(err);
			}
		});
	});
};

const _convertImage = remoteUrl => {
	return new Promise((resolve, reject) => {
		Jimp.read(remoteUrl)
			.then(function(img) {
				//files are initially saved to a temporary diretory so they can be
				//discarded afterwards
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

const _saveImage = (url, cb) => {
	return new Promise((resolve, reject) => {
		let urlSplit = url.split('/');
		let imgUrl = `public/catImages/${urlSplit[urlSplit.length - 1]}`;
		let publicImgUrl = imgUrl.split('public')[1];
		let imgName = urlSplit[urlSplit.length - 1];
		request.get({ url: url, encoding: 'binary' }, (err, response, body) => {
			if (err) throw err;
			fs.writeFile(imgUrl, body, 'binary', err => {
				if (err) throw err;
				let card = new Card();
				card.url = 'https://whiskr.co.uk' + publicImgUrl;
				card.imageid = imgName;
				card.save(err => {
					if (err) return console.log(err);
					// upload to cloudinary
					cloudinary.v2.uploader.upload(
						imgUrl,
						{ use_filename: true, unique_filename: false },
						(error, result) => {
							console.log(result);
						}
					);

					_uploadToCloud(card);
					console.log(
						'%s the image %s has been saved.',
						chalk.green('Success: '),
						imgName
					);
					cb();
				});
			});
		});
	});
};

const _uploadToCloud = card => {
	console.log(card);
};
