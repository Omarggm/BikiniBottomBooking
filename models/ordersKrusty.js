const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
// commented out because it is no longer being called in new format.
// const User = require('./User');
// const KrustyKrabMenu = require('./krustyMenu');


// create similar format to User.js
class ordersKrusty extends Model {}
  ordersKrusty.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'orderKrusty',
    },
    );

module.exports = ordersKrusty;

// old code prior to changing format. 
// const OrdersKrustyKrab = sequelize.define('OrdersKrustyKrab', {
//   order_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

// OrdersKrustyKrab.belongsTo(User, { foreignKey: 'user_id' });
// OrdersKrustyKrab.belongsTo(KrustyKrabMenu, { foreignKey: 'menu_id' });

// module.exports = OrdersKrustyKrab;