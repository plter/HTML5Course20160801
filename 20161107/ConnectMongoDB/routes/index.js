var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

/* GET home page. */
router.get('/', function (req, res, next) {

    MongoClient.connect("mongodb://localhost/myblog").then(function (db) {
        return db.collection("users").find().toArray();
    }).then(function (rows) {
        console.log(rows);

        res.render("index", {title: "不就是标题吗？", users: rows});
    }).catch(function (err) {
        console.log(err);
        res.send("Can not connect db server");
    });


});

module.exports = router;
