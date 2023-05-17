// models/ordersChumBucket.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

// commented out because it is no longer being called in new format.
// const User = require('./User');
// const ChumBucketMenu = require('./chumMenu');

// create similar format to User.js

class ordersChum extends Model { }
  ordersChum.init(
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
      modelName: 'orderChum',
    },
    );

module.exports = ordersChum;


// old code prior to changing format. 
// const OrdersChumBucket = sequelize.define('OrdersChumBucket', {
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

// OrdersChumBucket.belongsTo(User, { foreignKey: 'user_id' });
// OrdersChumBucket.belongsTo(ChumBucketMenu, { foreignKey: 'menu_id' });
