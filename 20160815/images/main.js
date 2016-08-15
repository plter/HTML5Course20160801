/**
 * Created by plter on 8/15/16.
 */


(function () {

    var content = document.querySelector("#content");
    var contentX = 0;
    var imgWidth = 200;
    var duration = 20;

    var index = 0;

    setInterval(function () {

        index++;
        if (index > 2) {
            index = 0;
        }

        var endX = -imgWidth * index;
        var distanceMoved = 0;
        var endDistance = Math.abs(endX - contentX);
        var speed = (endX - contentX) / duration;
        var absSpeed = Math.abs(speed);
        var id = setInterval(function () {
            contentX += speed;
            distanceMoved += absSpeed;
            if (distanceMoved > endDistance) {
                contentX = endX;
                clearInterval(id);
            }

            content.style.left = contentX + "px";
        }, 20);
    }, 3000);

})();