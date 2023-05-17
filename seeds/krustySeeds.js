const sequelize = require('../config/connections');
const menu = require('../models/krustyMenu');
// const orders = require('../models/ordersKrusty');
const krustyMenuDb = require('./krustyKrabMenuDb.json'); 

const seedMenu = async () => {
    await sequelize.sync({ force: true });
    
    await menu.bulkCreate(krustyMenuDb);
    process.exit(0);
    }
    seedMenu();
