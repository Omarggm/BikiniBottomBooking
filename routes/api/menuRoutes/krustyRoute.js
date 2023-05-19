const router = require('express').Router();
const { krustyMenu } = require('../../../models');

router.get('/', async (req, res) => {
  try {
    const krustyData = await krustyMenu.findAll();
    res.status(200).json(krustyData);
    console.log(krustyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;