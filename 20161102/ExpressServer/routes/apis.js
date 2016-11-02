var express = require('express');
var router = express.Router();
const upload = require("../sources/upload");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post("/upload", upload.single("file"), (req, res)=> {
    res.send(`/uploads/${req.file.filename}`);
});

module.exports = router;
