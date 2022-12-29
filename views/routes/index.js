const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.render('index');
});

router.get("/shop", (req,res) => {
    res.render('shop');
});

router.get("/login", (req,res) => {
    res.render('login');
});

module.exports = router;