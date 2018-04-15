const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');
const Joi = require('joi');

function tokenForUser(user){
	const timestamp = new Date().getTime();
	return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function(req,res,next){
	//user has already been authd, time to give them their token
	res.send({token: tokenForUser(req.user), user: req.user});
}

exports.signup = function(req,res,next){
	const {email, password} = req.body;
	// See if user with given email exists
	if(!email || !password){
		return res.status(422).send({error: 'You must provide email and password'})
	}
	User.findOne({email: email}, (err, existingUser) => {
		if(err){return next(err);}
		//if user does exist, return error
		if(existingUser){
			return res.status(422).send({error: 'Email is in use'});
		}
		// if email does not exist, create and save record
		const user = new User({
			email: email,
			password: password
		});
		user.save(err => {
			if(err){return next(err);}
			// Respond to request indicating the user was created
			res.json({token: tokenForUser(user), user: user});	
		});
	})
}