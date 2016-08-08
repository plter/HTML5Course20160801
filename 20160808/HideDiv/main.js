/**
 * Created by plter on 8/8/16.
 */


(function () {

    var fps = 50;
    var frames = 100;
    var div = document.getElementById("div");
    div.onclick = function (event) {

        var width = div.clientWidth;
        var height = div.clientHeight;
        var alpha = 1;
        var speedAlpha = 1 / frames;
        var speedX = width / frames;
        var speedY = height / frames;

        var id = setInterval(function () {
            width -= speedX;
            height -= speedY;
            alpha -= speedAlpha;

            div.style.width = width + "px";
            div.style.height = height + "px";
            div.style.opacity = alpha;

            if (width <= 0) {
                clearInterval(id);
                div.style.display = "none";
            }
        }, 1000 / fps);

    }
})();