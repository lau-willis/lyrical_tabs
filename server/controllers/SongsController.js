const Song = require('../models/Songs');

module.exports = {
	async index(req,res){
		try{
			let songs = null;
			if(req.query.search){
				const search = req.query.search;
				songs = await Song.find({
					$or: [
						{title: {$regex: ".*" + search + ".*"}},
						{artist: {$regex: ".*" + search + ".*"}},
						{album: {$regex: ".*" + search + ".*"}},
						{genre: {$regex: ".*" + search + ".*"}}
					]
				});
				res.json(songs);
			}else{
			    songs = await Song.find().limit(10);
				res.json(songs);
			}
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
	},
	async show(req,res){
		try{
			const song = await Song.findById(req.params.songId);
			res.json(song);
		}catch(err){
			res.status(500).send({
				error: 'An error has occurred trying to fetch songs by id'
			})
		}
	},
	async put(req,res){
		try{
			const song = await Song.findByIdAndUpdate(req.params.songId, req.body);
			res.json(song);
		}catch(err){
			res.status(500).send({
				error: 'An error has occurred trying to update songs by id'
			})
		}
	},
}