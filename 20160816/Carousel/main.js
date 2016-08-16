/**
 * Created by plter on 8/16/16.
 */

(function () {

    var carouselContent = document.querySelector("#carousel .carousel-content");

    function moveTo(target, fromX, toX, fromY, toY, duration, completeHandler) {
        var fps = 50;//frames per second
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

    var carouselImagesArray = [
        createImageContainer("images/1.jpg"),
        createImageContainer("images/2.jpg"),
        createImageContainer("images/3.jpg")
    ];
    var currentVisibleImage;

    function showCarouselImage(index) {
        if (currentVisibleImage) {
            carouselContent.removeChild(currentVisibleImage);
        }

        currentVisibleImage = carouselImagesArray[index];
        carouselContent.appendChild(currentVisibleImage);
    }

    function init() {

        var index = 0;
        showCarouselImage(index);
        setInterval(function () {
            index++;

            if (index >= carouselImagesArray.length) {
                index = 0;
            }
            showCarouselImage(index);
        }, 3000);
    }

    init();
})();