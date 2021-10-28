'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const dataRoutes = require('./routes/Data.routes');

const app = express();


dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', dataRoutes.routes);

const PORT = process.env.PORT;
// "start": "node server.js",
app.listen(PORT, () => (console.log('App is running on '+ process.env.HOST_URL)))