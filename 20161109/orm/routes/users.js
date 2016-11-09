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


router.post('/delete', (req, res)=> {

    if (!req.body.id) {
        res.json({state: 5});//没有传入id
        return;
    }

    req.models.User.get(req.body.id, function (err, user) {
        if (!err) {
            user.remove(function (err) {
                if (!err) {
                    res.json({state: 1});
                } else {
                    console.log(err);
                    res.json({state: 7});//无法删除用户
                }
            });
        } else {
            console.log(err);
            res.json({state: 6});//查询用户失败
        }
    });

});

module.exports = router;
