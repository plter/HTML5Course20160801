var express = require('express');
var router = express.Router();
const MongoClient = require("../src/db/MongoClient");

/* GET home page. */
router.get('/', function (req, res, next) {

    MongoClient.connect1().then(function (db) {
        return db.collection("users").find().toArray();
    }).then(function (rows) {
        res.render("index", {title: "所有用户", users: rows});
    }).catch(function (err) {
        console.log(err);
        res.send("Can not connect db server");
    });


});

module.exports = router;
