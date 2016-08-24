/**
 * Created by plter on 2016/8/24.
 */

(function () {

    for(var i=0;i<10;i++) {
        Ball.createBall();
    }

    setInterval(function () {
        Ball.moveBalls();
    },20);
})();