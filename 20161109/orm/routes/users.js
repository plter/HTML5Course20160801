var express = require('express');
var router = express.Router();
const StatusCode = require("../src/StatusCode");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

function checkUserNameInput(req, res, next) {
    if (req.body.name) {
        next();
    } else {
        res.json({state: 2});//前端没有传入用户名
    }
}

function checkAgeInput(req, res, next) {
    if (req.body.age) {
        next();
    } else {
        res.json({state: 3});//前端没有传入年龄
    }
}

function checkUserIdInput(req, res, next) {
    if (req.body.id) {
        next();
    } else {
        res.json({state: 5});//没有传入id
    }
}

router.post('/add', checkUserNameInput);
router.post('/add', checkAgeInput);
router.post('/add', (req, res)=> {
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


router.post('/delete', checkUserIdInput);
router.post('/delete', (req, res)=> {
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


router.post("/save", checkUserNameInput);
router.post("/save", checkAgeInput);
router.post("/save", checkUserIdInput);
router.post("/save", (req, res)=> {
    req.models.User.get(req.body.id, function (err, user) {
        if (!err) {
            user.name = req.body.name;
            user.age = req.body.age;

            user.save(function (err) {
                if (!err) {
                    res.json({state: 1});
                } else {
                    console.log(err);
                    res.json({state: StatusCode.CAN_NOT_SAVE_DATA});
                }
            })
        } else {
            console.log(err);
            res.json({state: StatusCode.CAN_NOT_GET_OBJECT});//无法获取该用户
        }
    });
});

module.exports = router;
