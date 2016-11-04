var express = require('express');
var router = express.Router();
var createConn = require("../sources/CreateConn");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/register', function (req, res) {

    if (!req.body.user) {
        res.json({state: 3, message: "No user name present"});//
        return;
    }
    if (!req.body.pass) {
        res.json({state: 4, message: "No password present"});
        return;
    }

    let conn = createConn();
    conn.connect1().then(result=> {
        return conn.query1("INSERT INTO `users` (`user`,`pass`) VALUES (?,?)", [req.body.user, req.body.pass]);
    }).then(result=> {
        res.json({state: 1, message: "OK"});

        conn.end();
    }).catch(error=> {
        console.log(error);
        // res.json({state: 2});//注册失败
        res.json({state: error.errno, message: error.code});
    });
});
module.exports = router;
