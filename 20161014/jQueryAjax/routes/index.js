var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.all("/data", function (req, res) {
    // res.send("Hello World");
    // res.json({name: "ucai"});

    switch (req.method.toLowerCase()) {
        case "post":
            res.send(`Hello ${req.body.name}`);
            break;
        case "get":
            res.send(`Hello ${req.query.name}`);
            break;
    }
});
module.exports = router;
