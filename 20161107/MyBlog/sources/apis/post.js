/**
 * Created by plter on 2016/11/7.
 */

const StatusCode = require("../StatusCode");

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

        //TODO 实现添加文章数据到数据库的功能
    });

};