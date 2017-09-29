var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardsSchema = new Schema({
	url: String,
	imageid: String
});

cardsSchema.pre('save', function(next) {
	var currentDate = new Date();
	this.updated_at = currentDate;
	if (!this.created_at) this.created_at = currentDate;
	next();
});
var Card = mongoose.model('Card', cardsSchema);

module.exports = Card;
