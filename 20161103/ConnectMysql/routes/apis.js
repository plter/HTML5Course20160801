var express = require('express');
var router = express.Router();
const createConn = require("../sources/MySqlConnection");
const StatusCode = require("../sources/StatusCode");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/delete", function (req, res) {
    var conn = createConn();
    conn.connect(function (err) {
        if (!err) {
            // let sql = `DELETE FROM \`users\` WHERE \`id\`=${req.query.id}`;
            //
            // conn.query(sql, function (err) {
            //     if (!err) {
            //         res.json({state: 1});//删除成功
            //     } else {
            //         res.json({state: 3});//执行删除任务时失败
            //     }
            // });

            conn.query("DELETE FROM `users` WHERE `id`=?", [req.query.id], function (err) {
                if (!err) {
                    res.json({state: 1});//删除成功
                } else {
                    res.json({state: 3});//执行删除任务时失败
                }
            });
        } else {
            res.json({state: 2});//删除失败
        }
    });

});


router.post("/adduser", function (req, res) {
    var conn = createConn();
    conn.connect(function (err) {
        if (!err) {
            conn.query("INSERT INTO `users` (`user`,`pass`,`age`) VALUES (?,?,?)",
                [req.body.user, req.body.pass, req.body.age], function (err) {
                    if (!err) {
                        res.json({state: 1});//成功
                    } else {
                        res.json({state: 5});//执行添加语句失败
                    }
                });
        } else {
            res.json({state: StatusCode.FAIL_TO_CONNECT_DB});//添加失败
        }
    })
});

router.post("/update", function (req, res) {
    var conn = createConn();

    conn.connect(function (err) {
        if (!err) {
            conn.query("UPDATE `users` SET `user`=?,`age`=? WHERE `id`=?",
                [req.body.user, req.body.age, req.body.id], function (err) {
                    if (!err) {
                        res.json({state: 1, message: "OK"});
                    } else {
                        res.json({state: StatusCode.FAIL_TO_SAVE_USER_INFO, message: "fail to save user information"});
                    }
                });
        } else {
            res.json({state: StatusCode.FAIL_TO_CONNECT_DB, message: "Fail to connect database"});
        }
    })
});

module.exports = router;
