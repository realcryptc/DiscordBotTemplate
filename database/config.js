/*
 * Program: Database configuration
 * Date: Jul 27, 2022
 * Purpose: Database details are all in one spot to allow for easy upgrade in the future
 */

const Sequelize = require('sequelize');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

// to change your db connection check out -> https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database
const sequelize = new Sequelize({
	database: process.env.DATABASE,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: 5432,
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			require: false,
			rejectUnauthorized: false,
		},
	},
	logging:false,
});

module.exports = {
	sequelize,
};
