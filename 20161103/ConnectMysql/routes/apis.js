var express = require('express');
var router = express.Router();
const createConn = require("../sources/MySqlConnection");

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
module.exports = router;
