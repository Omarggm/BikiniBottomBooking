const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
// commented out because it is no longer being called in new format.
// const User = require('./User');

class ChumMenu extends Model { }
  ChumMenu.init(
    {
      menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      item_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      item_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      item_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'chum_menu',
    },
  );

module.exports = ChumMenu;

// create similar format to User.js
// old code prior to changing format.
// const ChumBucketMenu = sequelize.define('ChumBucketMenu', {
//   menu_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//   },
//   item_name: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   item_description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   item_price: {
//     type: DataTypes.DECIMAL(10, 2),
//     allowNull: false,
//   },
// });

// ChumBucketMenu.belongsTo(User, { foreignKey: 'user_id' });

// module.exports = ChumBucketMenu;