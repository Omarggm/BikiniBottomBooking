const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
// const User = require('./User');


// create similar format to User.js

class krustyMenu extends Model {}
    krustyMenu.init(
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
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        item_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'krustyMenu',
    },
    );

module.exports = krustyMenu;


// old code prior to changing format.
// const KrustyMenu = sequelize.define('krusty_menu', {
//     menu_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//     },
//     item_name: {
//         type: DataTypes.STRING(50),
//         allowNull: false,
//     },
//     item_price: {
//         type: DataTypes.DECIMAL(10,2),
//         allowNull: false,
//     },
//     item_description: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// });

// module.exports = KrustyMenu;
    
 