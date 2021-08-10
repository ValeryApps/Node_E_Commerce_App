const { INTEGER, STRING } = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false
    },

})

module.exports = User;