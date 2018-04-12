const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const port = 3000;
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req,res) => {
	res.send({
		message: `Hello ${req.body.email}! You are now registered`
	})
})

app.listen(process.env.PORT || port, () => {
	console.log(`Listening at port: ${port}`)
})