const sequelize = require('../config/connections');
const menu = require('../models/chumMenu');
// const orders = require('../models/ordersChum');
const menuDb = require('./chumBucketMenuDb.json'); 

const seedMenu = async () => {
    await sequelize.sync({ force: true });
    
    await menu.bulkCreate(menuDb);
    process.exit(0);
    }
    seedMenu();
