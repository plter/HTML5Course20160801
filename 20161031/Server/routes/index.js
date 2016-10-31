var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title1: 'Express', data: "Hello"});
});

router.get("/hello", function (req, res) {
    res.send("Hello");
});

router.get("/data", function (req, res) {
    console.log(req.headers.referer);
    if (req.headers.referer.indexOf("localhost:63341") != -1) {
        res.jsonp({name: "ucai", age: 10});
    } else {
        res.send("恶意攻击别人网站可耻");
    }

});

module.exports = router;
