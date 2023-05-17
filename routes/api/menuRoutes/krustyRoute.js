const router = require('express').Router();
const krustySeeds = require('../../../seeds/krustyKrabMenuDb.json');

router.get('/', async (req, res) => {
  try {
    const krustyMenu = await krustySeeds.findAll();
    res.status(200).json(krustyMenu);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;