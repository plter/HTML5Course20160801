var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/hello', function (req, res) {
    res.send(`Hello ${req.query.user}`);
});

router.post("/hello", function (req, res) {
    // var str = "";
    // req.on("data", function (data) {
    //     str += data;
    // });
    // req.on("end", function () {
    //     console.log(str);
    // });

    res.send(`Hello ${req.body.user}`);
});

module.exports = router;
