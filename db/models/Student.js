var Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
	name: {
		type: Sequelize.STRING,
		unique: false
	},
	email: {
		type: Sequelize.STRING,
		isEmail: true
	}
})

module.exports = Student;