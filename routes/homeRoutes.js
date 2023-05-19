const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
    res.render('homepage')}
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/krustykrab', async (req, res) => {
    try {
    res.render('krustykrab')}
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/chumbucket', async (req, res) => {
    try {
    res.render('chumbucket')}
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/checkout', async (req, res) => {
    try {
    res.render('checkout')}
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
