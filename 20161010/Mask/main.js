/**
 * Created by plter on 10/10/16.
 */

(function () {


    var img;
    var context = document.getElementById("canvas").getContext("2d");
    var circleX = 0, circleY = 100, speed = 1;

    function loadImage() {
        img = new Image();
        img.src = "image.jpg";
    }

    function render() {

        circleX += speed;
        if (circleX > 300) {
            speed = -1;
        }
        if (circleX < 100) {
            speed = 1;
        }

        context.clearRect(0, 0, 400, 300);

        context.save();
        context.beginPath();
        context.arc(circleX, circleY, 100, 0, Math.PI * 2);
        context.closePath();
        context.clip();

        context.drawImage(img, 0, 0);
        context.restore();

        context.fillRect(0, 0, 100, 100);

        requestAnimationFrame(render);
    }

    function init() {
        loadImage();
        render();
    }

    init();


})();