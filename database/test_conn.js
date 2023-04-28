/*
 * Program: conection test
 * Date: 
 * Purpose: Test that the database connection is actually working
 */

const { sequelize, fname } = require('./config');
const fs = require('fs');

// test the file actually exists
if (fs.existsSync(fname)) {
	console.log(`The file ${fname} exists.\n`);
}
else {
	console.log(`The file ${fname} does not exist.\n`);
}

// test if a connection can be made
sequelize.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});
