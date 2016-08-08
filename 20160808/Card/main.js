/**
 * Created by plter on 8/8/16.
 */


(function () {

    var fps = 50;
    var frames = 50;

    var container = document.getElementById("container");
    var card = document.querySelector("#container .card");

    container.onclick = function (event) {
        var widthPercent = 100;
        var speedX = widthPercent / frames;

        var id = setInterval(function () {
            widthPercent -= speedX;

            card.style.width = widthPercent + "%";

            if (widthPercent <= 0) {
                clearInterval(id);
                card.style.display = "none";
            }
        }, 1000 / fps);
    }

})();