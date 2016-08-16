/**
 * Created by plter on 8/16/16.
 */

(function () {

    var carouselContent = document.querySelector("#carousel .carousel-content");

    function moveTo(target, fromX, toX, fromY, toY, duration, completeHandler) {
        var fps = 50;
        var frameDuration = Math.round(1000 / fps);
        var frames = Math.round(duration / 1000 * fps);
        var frameIndex = 0;
        var x = fromX, y = fromY;
        var speedX = (toX - fromX) / frames;
        var speedY = (toY - fromY) / frames;

        var id = setInterval(function () {

            x += speedX;
            y += speedY;

            frameIndex++;
            if (frameIndex >= frames) {
                clearInterval(id);
                x = toX;
                y = toY;

                if (completeHandler) {
                    completeHandler();
                }
            }

            target.style.left = x + "px";
            target.style.top = y + "px";
        }, frameDuration);
    }

    function createImageContainer(imgSrc) {
        var div = document.createElement("div");
        div.className = "image-container";

        var img = document.createElement("img");
        img.src = imgSrc;
        div.appendChild(img);
        return div;
    }

    carouselContent.appendChild(createImageContainer("images/1.jpg"));

    moveTo(carouselContent, 200, 0, 0, 0, 3000);
})();