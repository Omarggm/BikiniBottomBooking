const router = require("express").Router();
const { krustyMenu, chumMenu } = require("../models");

router.get("/", async (req, res) => {
  try {


    console.log("homepage");
    res.render("homepage", {

      logged_in: req.session.logged_in,
      title: "Bikini Bottom Booking Bonanza!!!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// logged_in: req.session.logged_in
router.get("/krustykrab", async (req, res) => {
  try {
    // const menuItems = [];
    const menuItems = await krustyMenu.findAll();
    const menu = menuItems.map(item => item.dataValues);
    res.render("krustykrab", {
      title: "Krusty Krab",
      menuItems: menu,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/chumbucket", async (req, res) => {
  try {
    const menuItems = await chumMenu.findAll();
    const menu = menuItems.map(item => item.dataValues);
    res.render("chumbucket", {
      title: "Chum Bucket",
      menuItems: menu,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/checkout", async (req, res) => {
  try {
    res.render("checkout", {
      title: "Galley Grub Checkout",
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
