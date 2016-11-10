var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer({dest: "public/uploads"});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/upload', upload.fields([
    {name: "name"},
    {name: "description"},
    {name: "photo", maxCount: 1}
]), (req, res)=> {
    req.models.Photo.create({
        name: req.body.name,
        description: req.body.description,
        path: `/uploads/${req.files.photo[0].filename}`
    }, function (err) {
        if (!err) {
            res.json({state: 1});
        } else {
            res.json({state: 2});
        }
    });

});

module.exports = router;
