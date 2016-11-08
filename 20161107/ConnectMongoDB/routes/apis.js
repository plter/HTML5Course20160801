var express = require('express');
var router = express.Router();
const StatusCode = require("../src/StatusCode");
const mongo = require("mongodb");
const MongoClient = require("../src/db/MongoClient");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post("/user/add", (req, res)=> {
    if (!req.body.name) {
        res.json({state: StatusCode.NO_USER_NAME_INPUT, message: "No user name input"});
        return;
    }

    if (!req.body.age) {
        res.json({state: StatusCode.NO_AGE_INPUT, message: "No age input"});
        return;
    }

    MongoClient.connect1().then(db=> {
        return db.collection("users").insertOne({name: req.body.name, age: req.body.age})
    }).then(result=> {
        res.json({state: StatusCode.SUCCESS, message: "Success"});
        console.log(arguments);
    }).catch(err=> {
        console.log(err);
        res.json({state: StatusCode.UNKNOWN_ERROR});
    });
});


router.get("/user/delete", (req, res)=> {
    if (!req.query.id) {
        res.json({state: StatusCode.NO_USER_ID_INPUT, message: "No user id input"});
        return;
    }

    console.log("Will delete a user whose id is " + req.query.id);

    MongoClient.connect1().then(db=> {
        return db.collection("users").deleteOne({_id: mongo.ObjectId(req.query.id)});
    }).then(result=> {
        res.json({state: StatusCode.SUCCESS, message: "Success"});
    }).catch(err=> {
        console.log(err);
        res.json({state: StatusCode.UNKNOWN_ERROR, message: "Unknown error"});
    });
});


module.exports = router;
