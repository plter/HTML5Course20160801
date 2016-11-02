var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/hello', function (req, res) {
    res.send(`Hello ${req.query.user}`);
});

router.post("/hello", function (req, res) {
    res.send(`Hello ${req.body.user}`);
});

router.post("/upload", upload.none(), function (req, res) {
    res.send(`Hello ${req.body.user},and your age is ${req.body.age}`);
});

module.exports = router;
