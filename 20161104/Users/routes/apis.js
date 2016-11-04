var express = require('express');
var router = express.Router();
var createConn = require("../sources/CreateConn");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.all('/register', function (req, res) {
    let conn = createConn();

    conn.connect1().then(result=> {
        res.json({state: 1});

        conn.end();
    }).catch(error=> {
        console.log(error);
        res.json({state: 2});//注册失败
    });
});
module.exports = router;
