/**
 * Created by plter on 2016/8/24.
 */

(function () {

    var balls = [];

    for(var i=0;i<10;i++) {
        var b = new Ball();
        document.body.appendChild(b.getHtmlNode());
        balls.push(b);
    }

    setInterval(function () {
        for(var i=0;i<balls.length;i++){
            balls[i].move();
        }
    },20);
})();