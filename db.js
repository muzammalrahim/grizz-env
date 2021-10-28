const dotenv = require('dotenv');
const Client = require('pg').Pool;
dotenv.config();

const db = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASS,
  port: 5432
});

module.exports.db = db;