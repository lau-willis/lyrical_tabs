const Song = require('../models/Songs');

module.exports = {
	async index(req,res){
		try{
			const songs = await Song.find().limit(10);
			res.json(songs);
		}catch(err){
			res.status(500).send({
				error: 'An error has occurred trying to fetch songs'
			})
		}
	},
	async post(req,res){
		try{
			const song = new Song(req.body);
			song.save(err => {
				if(err){return next(err);}
				res.json(song);	
			})
		}catch(err){
			res.status(500).send({
				error: 'An error has occurred tryin to create song'
			})
		}
	}
}