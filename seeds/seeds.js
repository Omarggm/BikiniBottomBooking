// use seeds.js file in week 13 activity 26 as a reference 
const sequelize = require('../config/connections');
const { User, chumMenu, krustyMenu, } = require('../models');

const userData = require('./usersDb.json');
const chumMenuData = require('./chumBucketMenuDb.json');
const krustyMenuData = require('./krustyKrabMenuDb.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('Users created:', users);

  const chumMenus = await chumMenu.bulkCreate(chumMenuData, {
    individualHooks: true,
    returning: true,
  });
  console.log('Chum Menus created:', chumMenus);

  const krustyMenus = await krustyMenu.bulkCreate(krustyMenuData, {
    individualHooks: true,
    returning: true,
  });
  console.log('Krusty Menus created:', krustyMenus);

  process.exit(0);
};

seedDatabase();

