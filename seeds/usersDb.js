const sequelize = require('../config/connections');
const users = require('../models/User');
// const orders = require('../models/ordersKrusty');
const usersDb = require('./usersDb.json'); 

const seedUsers = async () => {
    await sequelize.sync({ force: true });
    
    await users.bulkCreate(usersDb);
    process.exit(0);
    }
    seedUsers();