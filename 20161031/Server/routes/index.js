var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title1: 'Express', data: "Hello"});
});

router.get("/hello", function (req, res) {
    res.send("Hello");
});

module.exports = router;
