require('dotenv').config();

var config = {
    connectionLimit: 100,
    host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
    debug: false
  };

  module.exports = config;