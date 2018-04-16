const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Define our model
const songSchema = new Schema({
	title: String,
	artist: String,
	genre: String,
	album: String,
	albumImageUrl: String,
	youtubeId: String,
	lyrics: String,
	tab: String
});
//Create model class
const model = mongoose.model('song', songSchema)

//export model

module.exports = model; 