/**
 * Created by plter on 2016/11/7.
 */

var createConn = require("../CreateConn");
const md5 = require("md5-js");
const StatusCode = require("../StatusCode");


module.exports = function (router) {

    function checkUserAndPassword(req, res, next) {
        if (!req.body.user) {
            res.json({state: StatusCode.NO_USER_NAME_INPUT, message: "No user name present"});//
            return;
        }
        if (!req.body.pass) {
            res.json({state: StatusCode.NO_PASSWORD_INPUT, message: "No password present"});
            return;
        }

        next();
    }

    router.post("/user/register", checkUserAndPassword)
        .post('/user/register', function (req, res) {
            let conn = createConn();
            conn.connect1().then(result=> {
                return conn.query1("INSERT INTO `users` (`user`,`pass`) VALUES (?,?)", [req.body.user, md5(req.body.pass)]);
            }).then(result=> {
                res.json({state: StatusCode.SUCCESS, message: "OK"});

                conn.end();
            }).catch(error=> {
                console.log(error);
                // res.json({state: 2});//注册失败
                res.json({state: error.errno, message: error.code});
            });
        });


    router.post("/user/login", checkUserAndPassword)
        .post("/user/login", function (req, res) {
            let conn = createConn();
            conn.connect1().then(function () {
                return conn.query1("SELECT * FROM `users` WHERE `user`=?", [req.body.user]);
            }).then(function (rows) {
                if (rows.length) {
                    var result = rows[0];
                    if (md5(req.body.pass) == result.pass) {
                        //保存会话信息
                        req.session.loggedUser = result;

                        res.json({state: StatusCode.SUCCESS, message: "OK"});
                    } else {
                        res.json({state: StatusCode.PASSWORD_WRONG, message: "Password wrong"});
                    }
                } else {
                    res.json({state: StatusCode.NO_SUCH_USER, message: "No such user"});//用户名不存在
                }

                conn.end();
            }).catch(function (error) {
                console.log(error);
                res.json({state: error.errno, message: error.code});
            });
        });
};