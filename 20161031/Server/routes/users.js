var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/hello", function (req, res) {
    res.send("User Hello");
});

router.get("/a/b/c/d.html", function (req, res) {
    res.send("Hello Java");
});

module.exports = router;
