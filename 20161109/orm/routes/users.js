var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/add', (req, res)=> {
    if (!req.body.name) {
        res.json({state: 2});//前端没有传入用户名
        return;
    }
    if (!req.body.age) {
        res.json({state: 3});//前端没有传入年龄
        return;
    }

    req.models.User.create(
        {name: req.body.name, age: req.body.age},
        function (err) {
            if (!err) {
                res.json({state: 1});
            } else {
                console.log(err);
                res.json({state: 4});//插入数据时出错
            }
        }
    );
});
module.exports = router;
