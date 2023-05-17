const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const menuRoutes = require('./menuRoutes');

// /api/users
// api/menu
router.use('/users', userRoutes);
router.use('/menu', menuRoutes);
module.exports = router;