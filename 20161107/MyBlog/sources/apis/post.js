/**
 * Created by plter on 2016/11/7.
 */

const StatusCode = require("../StatusCode");
const createConn = require("../CreateConn");

module.exports = function (router) {

    router.post("/post/add", (req, res)=> {
        if (!req.session.loggedUser) {
            res.json({state: StatusCode.YOU_ARE_NOT_LOGGED, message: "You are not logged"});
            return;
        }

        if (!req.body.title) {
            res.json({state: StatusCode.NO_POST_TITLE_INPUT, message: "No post title input"});
            return;
        }

        if (!req.body.content) {
            res.json({state: StatusCode.NO_POST_CONTENT_INPUT, message: "No post content input"});
            return;
        }

        var conn = createConn();
        conn.connect1().then(function () {
            return conn.query1("INSERT INTO `posts` (`title`,`content`,`author`) VALUES (?,?,?)", [
                req.body.title,
                req.body.content,
                req.session.loggedUser.id
            ]);
        }).then(function () {
            res.json({state: StatusCode.SUCCESS, message: "OK"});
        }).catch(function (error) {
            res.json({state: error.errno, message: error.code});
        });

    });

};