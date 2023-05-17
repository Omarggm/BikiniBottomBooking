const User = require('./User');
const chumMenu = require('./chumMenu');
const krustyMenu = require('./krustyMenu');
const orderChum = require('./ordersChum');
const orderKrusty = require('./ordersKrusty');

User.hasMany(orderChum, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
User.hasMany(orderKrusty, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
orderChum.belongsTo(User, {
    foreignKey: 'user_id'
});
orderKrusty.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, chumMenu, krustyMenu, orderChum, orderKrusty };
