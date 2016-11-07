var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.session.loggedUser) {
        res.send(`当前登陆用户id：${req.session.loggedUser.id}，当前登陆用户名：${req.session.loggedUser.user}`);
    } else {
        res.send("没有登陆的用户");
    }
});

require("../sources/apis/user")(router);
require("../sources/apis/post")(router);

module.exports = router;
