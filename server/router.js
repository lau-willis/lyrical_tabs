const Authentication = require('./controllers/authentication');
const SongsController = require('./controllers/SongsController');
const passportService = require('./services/passport');
const passport = require('passport');
const authenticationPolicy = require('./policies/authentication-policy');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app){
	app.get('/', function(req,res){
		res.send('hi there')
	})
	app.post('/signup', authenticationPolicy, Authentication.signup);
	app.post('/signin', requireSignin, Authentication.signin);
	app.get('/songs', SongsController.index);
	app.get('/songs/:songId', SongsController.show);
	app.put('/songs/:songId', SongsController.put)
	app.post('/songs', SongsController.post)
}