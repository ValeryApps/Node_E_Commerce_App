const { INTEGER } = require("sequelize");
const sequelize = require("../util/database");

const CartItem = sequelize.define("cartItem", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNul: false,
  },
  quantity: INTEGER,
});

module.exports = CartItem;
