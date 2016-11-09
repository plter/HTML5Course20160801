var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    req.models.User.find({}, function (err, result) {
        if (!err) {
            console.log(result);
            res.render('index', {title: 'Express', users: result});
        } else {
            console.log(err);
            res.send("<h1>连接数据库出错</h1>");
        }
    });

});

module.exports = router;
