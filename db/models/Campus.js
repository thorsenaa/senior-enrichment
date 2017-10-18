var Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {
	name: Sequelize.STRING,
	image: Sequelize.STRING
});

module.exports = Campus;