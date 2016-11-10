var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    req.models.Photo.find(function (err, photos) {
        if (!err) {
            res.render('index', {title: 'Express', photos: photos});
        } else {
            res.send("<h1>连接数据库出错</h1>")
        }
    });

});

module.exports = router;
