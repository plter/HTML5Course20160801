var express = require('express');
var router = express.Router();
const createConn = require("../sources/CreateConn");

/* GET home page. */
router.get('/', function (req, res, next) {

    let conn = createConn();
    conn.connect1().then(function () {
        return conn.query1("SELECT * FROM `posts`");
    }).then(function (rows) {

        let promises = [];

        for (var i = 0; i < rows.length; i++) {
            (function (post) {
                promises.push(new Promise(function (resolve, reject) {
                    conn.query1("SELECT `id`,`user` FROM `users` WHERE `id`=?", [post.author]).then(function (users) {
                        if (users.length) {
                            post.authorInfo = users[0];
                        }
                        resolve(post);
                    }).catch(function (err) {
                        reject(err);
                    });
                }));
            })(rows[i]);
        }

        return Promise.all(promises);
    }).then(function (posts) {
        res.render('index', {title: '我的博客', posts: posts});
    }).catch(function (err) {
        console.log(err);
        res.send("<h1>无法连接数据库</h1>");
    });

});

router.get('/editor', function (req, res) {
    res.render('editor', {req: req, res: res});
});
module.exports = router;
