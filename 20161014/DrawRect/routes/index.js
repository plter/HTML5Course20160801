var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post("/draw", function (req, res) {

    // let x = req.query.x,
    //     y = req.query.y,
    //     width = req.query.width,
    //     height = req.query.height,
    //     color = req.query.color;

    let x = req.body.x,
        y = req.body.y,
        width = req.body.width,
        height = req.body.height,
        color = req.body.color;

    res.send(`
<html>
<body>
<canvas id="canvas" width="400" height="300"></canvas>
<script>
var x = ${x};
var y = ${y};
var width = ${width};
var height = ${height};
var color = "${color}";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.fillStyle = color;
context.fillRect(x,y,width,height);

</script>
</body>
</html>
`);
});
module.exports = router;
