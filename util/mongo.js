const mongoose = require('mongoose');
const chalk = require('chalk');

var db;
module.exports = {
	connectToServer: function(callback) {
		var mongoDB = process.env.MLAB_CONNECTION;
		mongoose.Promise = global.Promise;
		mongoose.connect(mongoDB);
		mongoose.connection.on(
			'error',
			console.log(
				'%s MongoDB connection error. Please make sure MongoDB is running.',
				chalk.red('✗')
			)
		);
		return callback();
	},
	getDb: function() {
		return db;
	}
};
