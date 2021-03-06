const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
//DB setup
mongoose.connect(process.env.MONGO_URI || config.MONGO_URI);

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
app.use(cors());
router(app)

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening at port: ${port}`);
})