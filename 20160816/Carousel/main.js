/**
 * Created by plter on 8/16/16.
 */

(function () {

    /**
     * 容纳轮播图片Div的容器
     * @type {Element}
     */
    var carouselContent = document.querySelector("#carousel .carousel-content");

    /**
     * 把一个对象从某位置移动到目标位置
     * @param target 被移动的对象
     * @param fromX 开始left位置
     * @param toX 结束点的left位置
     * @param fromY 开始点的top位置
     * @param toY 结束点的top位置
     * @param duration 动画效果共花费的时间,单位是毫秒
     * @param completeHandler 动画完成后的回调函数
     */
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
                    completeHandler(target);
                }
            }

            target.style.left = x + "px";
            target.style.top = y + "px";
        }, frameDuration);
    }

    /**
     * 根据一个图片的url创建一个包括img的div
     * @param imgSrc {String} 图片的url
     * @returns {HTMLDivElement} 被创建的div
     */
    function createImageContainer(imgSrc) {
        var div = document.createElement("div");
        div.className = "image-container";

        var img = document.createElement("img");
        img.src = imgSrc;
        div.appendChild(img);
        return div;
    }

    /**
     * 轮播图div数组
     * @type {*[]}
     */
    var carouselImagesArray = [
        createImageContainer("images/1.jpg"),
        createImageContainer("images/2.jpg"),
        createImageContainer("images/3.jpg")
    ];
    var currentVisibleImage;

    function showCarouselImage(index) {
        if (currentVisibleImage) {
            moveTo(currentVisibleImage, 0, -800, 0, 0, 500, function (target) {
                carouselContent.removeChild(target);
            });
        }

        currentVisibleImage = carouselImagesArray[index];
        carouselContent.appendChild(currentVisibleImage);
        currentVisibleImage.style.left = "800px";
        moveTo(currentVisibleImage, 800, 0, 0, 0, 500);
    }

    function init() {

        currentVisibleImage = carouselImagesArray[0];
        carouselContent.appendChild(currentVisibleImage);

        var index = 0;
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