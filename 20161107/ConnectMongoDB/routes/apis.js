var express = require('express');
var router = express.Router();
const Status = require("../src/Status");
const mongo = require("mongodb");
const MongoClient = require("../src/db/MongoClient");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post("/user/add", (req, res)=> {
    if (!req.body.name) {
        res.json({state: Status.STATE_NO_USER_NAME_INPUT, message: "No user name input"});
        return;
    }

    if (!req.body.age) {
        res.json({state: Status.STATE_NO_AGE_INPUT, message: "No age input"});
        return;
    }

    MongoClient.connect1().then(db=> {
        return db.collection("users").insertOne({name: req.body.name, age: req.body.age})
    }).then(result=> {
        res.json({state: Status.STATE_SUCCESS, message: "Success"});
        console.log(arguments);
    }).catch(err=> {
        console.log(err);
        res.json(Status.makeResponse(Status.STATE_UNKNOWN_ERROR, Status.MESSAGE_UNKNOWN_ERROR));
    });
});


router.get("/user/delete", (req, res)=> {
    if (!req.query.id) {
        res.json({state: Status.STATE_NO_USER_ID_INPUT, message: "No user id input"});
        return;
    }

    console.log("Will delete a user whose id is " + req.query.id);

    MongoClient.connect1().then(db=> {
        return db.collection("users").deleteOne({_id: mongo.ObjectId(req.query.id)});
    }).then(result=> {
        console.log(result);
        res.json({state: Status.STATE_SUCCESS, message: "Success"});
    }).catch(err=> {
        console.log(err);
        res.json({state: Status.STATE_UNKNOWN_ERROR, message: "Unknown error"});
    });
});


router.post("/user/update", (req, res)=> {
    if (!req.body.id) {
        res.json(Status.makeResponse(Status.STATE_NO_USER_ID_INPUT, Status.MESSAGE_NO_USER_ID_INPUT));
        return;
    }

    if (!req.body.name) {
        res.json(Status.makeResponse(Status.STATE_NO_USER_NAME_INPUT, Status.MESSAGE_NO_USER_NAME_INPUT));
        return;
    }

    if (!req.body.age) {
        res.json(Status.makeResponse(Status.STATE_NO_AGE_INPUT, Status.MESSAGE_NO_AGE_INPUT));
        return;
    }

    MongoClient.connect1().then(function (db) {
        return db.collection("users").updateOne(
            {_id: mongo.ObjectId(req.body.id)},
            {$set: {name: req.body.name, age: req.body.age}}
        );
    }).then(function (result) {
        res.json(Status.makeResponse(Status.STATE_SUCCESS, Status.MESSAGE_SUCCESS));
    }).catch(function (error) {
        console.log(error);
        res.json(Status.makeResponse(Status.STATE_UNKNOWN_ERROR, Status.MESSAGE_UNKNOWN_ERROR));
    });
});


module.exports = router;
