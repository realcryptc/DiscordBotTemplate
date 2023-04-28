/*
 * Program: Database models
 * Date: Jul 27, 2022
 * Purpose: All models are defined here, allowing for easy customization of objects via Sequalize
 */
const { sequelize } = require('./config');
const Sequelize = require('sequelize');

// Model definitions
const ExampleUser = sequelize.define('respect', {
	userID: {
		type: Sequelize.STRING,
		unique: true,
	},
	nickname: {
		type: Sequelize.STRING,
	}, 
	favorite_color: {
		type: Sequelize.STRING,
	}, 
});


module.exports = {
	ExampleUser
};