const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create a local strategy
const localOptions = {usernameField: 'email'}

const localLogin = new LocalStrategy(localOptions, function(email, password, done){
	//Verify this email and pw and call done with user
	//else call done with false
	User.findOne({email: email}, function(err, user){
		if(err){return done(err);}
		if(!user){return done(null, false);}

		//compare pws - is pw equal to user.pw
		user.comparePassword(password, function(err, isMatch){
			if(err){return done(err);}
			if(!isMatch){return done(null, false);}
			return done(null, user); //this gives us access to req.user to get the current user model
		})
	})
});

// Setup options for JWT strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	// See if the user ID in the payload exists in our database
	//if found then call done with that user
	//otherwise call done without a user object
	User.findById(payload.sub, function(err, user){
		if(err){return done(err, false);}
		if(user){
			done(null, user);
		}else{
			done(null, false);
		}
	});
});

passport.use(jwtLogin);
passport.use(localLogin);

//tell passport to use this strategy