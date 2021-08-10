const Sequelize = require('sequelize/index')
const sequelize = new Sequelize('e_shop_db', 'root', '@Valery2021', { dialect: 'mysql', host: 'localhost' });


module.exports = sequelize;