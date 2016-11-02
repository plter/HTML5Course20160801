var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer({dest: "public/uploads"});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/hello', function (req, res) {
    res.send(`Hello ${req.query.user}`);
});

router.post("/hello", function (req, res) {
    res.send(`Hello ${req.body.user}`);
});

router.post("/upload", upload.none()/*只接受上传文本数据*/, function (req, res) {
    res.send(`Hello ${req.body.user},and your age is ${req.body.age}`);
});

router.post("/hello.json", (req, res)=> {
    let allData;
    req.on("data", data=> {
        if (allData) {
            allData = Buffer.concat([allData, data]);
        } else {
            allData = data;
        }
    });
    req.on("end", ()=> {
        var obj = JSON.parse(allData.toString());
        res.json({message: `Your name is ${obj.user},your age is ${obj.age}`});
    });
});

router.post("/upload.image", upload.single("img"), function (req, res) {
    res.render("UploadImageHandler", {imagePath: `/uploads/${req.file.filename}`});
});

module.exports = router;
