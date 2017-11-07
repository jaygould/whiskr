var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var voteSchema = new Schema({
	cardid: String,
	vote: String,
	created_at: Date
});

voteSchema.pre('save', function(next) {
	var currentDate = new Date();
	this.created_at = currentDate;
	next();
});
var Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
