const express = require('express');
const app = express();
const routes = require('./routes');
const sequelize = require('./config/connections');
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);
// Start server
sequelize.sync({force: false}).then(() => {
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})});