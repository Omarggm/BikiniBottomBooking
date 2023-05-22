const router = require("express").Router();
const { krustyMenu, chumMenu } = require("../models");

router.get("/", async (req, res) => {
  try {
    console.log("homepage");
    res.render("homepage", {
      title: "Bikini Bottom Booking Bonanza!!!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// loggedIn: req.session.loggedIn
router.get("/krustykrab", async (req, res) => {
  try {
    // const menuItems = [];
    const menuItems = await krustyMenu.findAll();
    const menu = menuItems.map(item => item.dataValues);
    res.render("krustykrab", {
      title: "Krusty Krab",
      menuItems: menu,
      loggedIn: req.session.loggedIn,
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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/checkout", async (req, res) => {
  try {
    res.render("checkout", {
      title: "Galley Grub Checkout",
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
