const router = require('express').Router();
const { chumMenu } = require('../../../models');

router.get('/', async (req, res) => {
  try {
    const chumData = await chumMenu.findAll();
    res.status(200).json(chumData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;