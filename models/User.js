const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connections');

class User extends Model{
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
      }

}
User.init(
{
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
   
},
{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'user', 
},
);

module.exports = User;