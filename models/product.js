const { INTEGER, STRING, DOUBLE, TEXT } = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: TEXT,
    allowNull: false
  },
  price: {
    type: DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: STRING,
    allowNull: false
  },
})
module.exports = Product