const router = require('express').Router();
const chumRoute = require('./chumRoute');
const krustyRoute = require('./krustyRoute');

// /api/menu/chumRoute
// /api/menu/krustyRoute
router.use('/chumRoute', chumRoute);
router.use('/krustyRoute', krustyRoute);

module.exports = router;