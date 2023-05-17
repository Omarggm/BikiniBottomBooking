const router = require('express').Router();
const chumSeeds = require('../../../seeds/chumBucketMenuDb.json');

router.get('/', async (req, res) => {
  try {
    const chumMenu = await chumSeeds.findAll();
    res.status(200).json(chumMenu);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;