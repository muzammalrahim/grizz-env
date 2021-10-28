const express = require('express');
const serverless = require('serverless-http');

const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const dataRoutes = require('../routes/Data.routes');

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/.netlify/functions/api', dataRoutes.routes);

module.exports = app;
module.exports.handler = serverless(app);