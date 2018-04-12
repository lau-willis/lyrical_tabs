const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const port = 3000;
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req,res) => {
	res.send({
		message: 'hello world'
	})
})

app.listen(process.env.PORT || port, () => {
	console.log(`Listening at port: ${port}`)
})