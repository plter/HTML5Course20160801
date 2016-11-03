var express = require('express');
var router = express.Router();
const upload = require("multer")();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post("/upload", upload.any(), (req, res) => {
    res.send("OK");
});

module.exports = router;
