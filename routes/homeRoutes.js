const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
    res.render('homepage', {
        title: 'Bikini Bottom Booking Bonanza!!!'})}
    catch (err) {
        res.status(500).json(err);
    }
});
// loggedIn: req.session.loggedIn
router.get('/krustykrab', async (req, res) => {
    try {
<<<<<<< HEAD
    res.render('krustykrab')} // before this render I need to fetch this information from the database
=======
    const menuItems = [];
    res.render('krustykrab', {
        title: 'Krusty Krab',
        menuItems: menuItems,
    })
}
>>>>>>> ef5479ca7860371cc1a9d97c775390be0b57a6a1
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/chumbucket', async (req, res) => {
    try {
        const menuItems = [];
    res.render('chumbucket', {
        title: 'Chum Bucket',
        menuItems: menuItems,
    })}
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/checkout', async (req, res) => {
    try {
    res.render('checkout', {
        title: 'Checkout'
    })}
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
