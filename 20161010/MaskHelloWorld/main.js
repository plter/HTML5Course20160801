/**
 * Created by plter on 10/10/16.
 */

(function () {

    var context = document.getElementById("canvas").getContext("2d");
    var clipRectX = -400, speed = 1;


    function render() {
        context.clearRect(0, 0, 400, 300);

        //draw background text
        context.save();
        context.font = "50px Courier New";
        context.fillStyle = "#000000";
        context.fillText("Hello World", 50, 100);
        context.restore();

        context.save();
        context.beginPath();
        clipRectX += speed;
        if (clipRectX > 0) {
            speed = -1
        }
        if (clipRectX < -400) {
            speed = 1;
        }
        context.rect(clipRectX, 0, 400, 300);
        context.closePath();
        context.clip();

        context.font = "50px Courier New";
        context.fillStyle = "#ff0000";
        context.fillText("Hello World", 50, 100);
        context.restore();

        requestAnimationFrame(render);
    }

    function init() {
        render();
    }

    init();

})();