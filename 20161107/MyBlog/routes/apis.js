var express = require('express');
var router = express.Router();
var createConn = require("../sources/CreateConn");
const md5 = require("md5-js");


/* GET users listing. */
var r = router.get('/', function (req, res, next) {
    if (req.session.loggedUser) {
        res.send(`当前登陆用户id：${req.session.loggedUser.id}，当前登陆用户名：${req.session.loggedUser.user}`);
    } else {
        res.send("没有登陆的用户");
    }
});

function checkUserAndPassword(req, res, next) {
    if (!req.body.user) {
        res.json({state: 3, message: "No user name present"});//
        return;
    }
    if (!req.body.pass) {
        res.json({state: 4, message: "No password present"});
        return;
    }

    next();
}

router.post("/register", checkUserAndPassword)
    .post('/register', function (req, res) {
        let conn = createConn();
        conn.connect1().then(result=> {
            return conn.query1("INSERT INTO `users` (`user`,`pass`) VALUES (?,?)", [req.body.user, md5(req.body.pass)]);
        }).then(result=> {
            res.json({state: 1, message: "OK"});

            conn.end();
        }).catch(error=> {
            console.log(error);
            // res.json({state: 2});//注册失败
            res.json({state: error.errno, message: error.code});
        });
    });


router.post("/login", checkUserAndPassword)
    .post("/login", function (req, res) {
        let conn = createConn();
        conn.connect1().then(function () {
            return conn.query1("SELECT * FROM `users` WHERE `user`=?", [req.body.user]);
        }).then(function (rows) {
            if (rows.length) {
                var result = rows[0];
                if (md5(req.body.pass) == result.pass) {
                    //保存会话信息
                    req.session.loggedUser = result;

                    res.json({state: 1, message: "OK"});
                } else {
                    res.json({state: 6, message: "Password wrong"});
                }
            } else {
                res.json({state: 5, message: "No such user"});//用户名不存在
            }

            conn.end();
        }).catch(function (error) {
            console.log(error);
            res.json({state: error.errno, message: error.code});
        });
    });

module.exports = router;
