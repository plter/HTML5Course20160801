/**
 * Created by plter on 8/16/16.
 */

(function () {

    /**
     * 轮播图的宽度
     * @type {number}
     */
    var CAROUSEL_WIDTH = 800;
    /**
     * 轮播图的高度
     * @type {number}
     */
    var CAROUSEL_HEIGHT = 600;

    /**
     * 切换图片的动画效果的播放时长
     * @type {number}
     */
    var SWITCH_IMAGE_ANIMATION_DURATION = 300;

    /**
     * 容纳轮播图片Div的容器
     * @type {Element}
     */
    var carouselContent = document.querySelector("#carousel .carousel-content");

    /**
     * 图片在数组中的位置
     * @type {number}
     */
    var imageIndex = 0;

    /**
     * 用于切换图片的计时器
     * @type {number}
     */
    var switchImageTimerId = -1;

    /**
     * 该变量用于指示当前是否正在切换图片
     * @type {boolean}
     */
    var switchImageAnimationPlaying = false;

    /**
     * 透明度动画
     * @param target 被执行动画的对象
     * @param fromAlpha 开始时的透明度
     * @param toAlpha 结束时的透明度
     * @param duration 动画时长
     * @param completeHandler 动画结束后的回调函数
     */
    function alphaAnim(target, fromAlpha, toAlpha, duration, completeHandler) {
        var fps = 50;
        var frameDuration = Math.round(1000 / fps);//每一帧的时长
        var frames = Math.round(duration / 1000 * fps);//完成该动画所需要的帧数
        var frameIndex = 0;
        var speed = (toAlpha - fromAlpha) / frames;
        var alpha = fromAlpha;

        var id = setInterval(function () {
            alpha += speed;

            frameIndex++;
            if (frameIndex >= frames) {
                clearInterval(id);
                alpha = toAlpha;

                if (completeHandler) {
                    completeHandler(target);
                }
            }

            target.style.opacity = alpha;
        }, frameDuration);
    }


    /**
     * 淡入
     * @param target
     * @param completeHandler
     */
    function fadeIn(target, completeHandler) {
        target.style.left = "0";
        target.style.top = "0";
        target.style.opacity = 0;
        alphaAnim(target, 0, 1, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }


    /**
     * 淡出
     * @param target
     * @param completeHandler
     */
    function fadeOut(target, completeHandler) {
        alphaAnim(target, 1, 0, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }


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

    function moveInFromLeft(target, completeHandler) {
        target.style.left = -CAROUSEL_WIDTH + "px";
        target.style.opacity = 1;
        moveTo(target, -CAROUSEL_WIDTH, 0, 0, 0, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }

    function moveInFromTop(target, completeHandler) {
        target.style.top = -CAROUSEL_HEIGHT + "px";
        target.style.opacity = 1;
        moveTo(target, 0, 0, -CAROUSEL_HEIGHT, 0, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }

    function moveInFromRight(target, completeHandler) {
        target.style.left = CAROUSEL_WIDTH + "px";
        target.style.opacity = 1;
        moveTo(target, CAROUSEL_WIDTH, 0, 0, 0, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }

    function moveInFromBottom(target, completeHandler) {
        target.style.top = CAROUSEL_HEIGHT + "px";
        target.style.opacity = 1;
        moveTo(target, 0, 0, CAROUSEL_HEIGHT, 0, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }

    function moveOutToLeft(target, completeHandler) {
        moveTo(target, 0, -CAROUSEL_WIDTH, 0, 0, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }

    function moveOutToTop(target, completeHandler) {
        moveTo(target, 0, 0, 0, -CAROUSEL_HEIGHT, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }

    function moveOutToRight(target, completeHandler) {
        moveTo(target, 0, CAROUSEL_WIDTH, 0, 0, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }

    function moveOutToBottom(target, completeHandler) {
        moveTo(target, 0, 0, 0, CAROUSEL_HEIGHT, SWITCH_IMAGE_ANIMATION_DURATION, completeHandler);
    }

    /**
     * 根据一个图片的url创建一个包括img的div
     * @param imgSrc {String} 图片的url
     * @param linkUrl {String} 轮播图链接地址
     * @returns {HTMLDivElement} 被创建的div
     */
    function createImageContainer(imgSrc, linkUrl) {
        var div = document.createElement("div");
        div.className = "image-container";

        var a = document.createElement("a");
        a.href = linkUrl || "#";
        div.appendChild(a);

        var img = document.createElement("img");
        img.src = imgSrc;
        a.appendChild(img);
        return div;
    }

    /**
     * 轮播图div数组
     * @type {*[]}
     */
    var carouselImagesArray = [
        createImageContainer("images/1.jpg", "http://ucai.cn"),
        createImageContainer("images/2.jpg", "http://baidu.com"),
        createImageContainer("images/3.jpg")
    ];

    /**
     * 切换图片时的动画效果数组
     * @type {*[]}
     */
    var switchImageAnimations = [
        {inAnim: moveInFromRight, outAnim: moveOutToLeft},
        {inAnim: moveInFromTop, outAnim: moveOutToBottom},
        {inAnim: moveInFromBottom, outAnim: moveOutToTop},
        {inAnim: fadeIn, outAnim: fadeOut},
        {inAnim: moveInFromLeft, outAnim: moveOutToRight}
    ];
    var currentVisibleImage;

    /**
     * 呈现下一张图片
     */
    function showNextCarouselImage() {
        if (!switchImageAnimationPlaying) {
            switchImageAnimationPlaying = true;
            imageIndex++;
            if (imageIndex >= carouselImagesArray.length) {
                imageIndex = 0;
            }

            switchImage(carouselImagesArray[imageIndex], {
                inAnim: moveInFromRight,
                outAnim: moveOutToLeft
            }, function () {
                switchImageAnimationPlaying = false;
            });
        }
    }

    /**
     * 呈现上一张图片
     */
    function showPreCarouselImage() {
        if (!switchImageAnimationPlaying) {
            switchImageAnimationPlaying = true;
            imageIndex--;

            if (imageIndex < 0) {
                imageIndex = carouselImagesArray.length - 1;
            }

            switchImage(carouselImagesArray[imageIndex], {
                inAnim: moveInFromLeft,
                outAnim: moveOutToRight
            }, function () {
                switchImageAnimationPlaying = false;
            });
        }
    }

    /**
     * 有动画效果的切换图片
     */
    function switchImageWithEffect() {
        if (!switchImageAnimationPlaying) {
            switchImageAnimationPlaying = true;
            imageIndex++;
            if (imageIndex >= carouselImagesArray.length) {
                imageIndex = 0;
            }

            switchImage(carouselImagesArray[imageIndex],
                switchImageAnimations[Math.floor(Math.random() * switchImageAnimations.length)],
                function () {
                    switchImageAnimationPlaying = false;
                });
        }
    }


    /**
     * 添加第一个图片,不加任何效果
     */
    function addInitCarouselImage() {
        imageIndex = 0;
        currentVisibleImage = carouselImagesArray[imageIndex];
        carouselContent.appendChild(currentVisibleImage);
    }

    /**
     * 为左右按钮添加事件侦听器
     */
    function addListeners() {
        document.querySelector("#carousel .btn-pre").onclick = function () {
            showPreCarouselImage();
            restartSwitchImageTimer();
        };

        document.querySelector("#carousel .btn-next").onclick = function () {
            showNextCarouselImage();
            restartSwitchImageTimer();
        };
    }

    /**
     * 切换图片
     * @param newImage 将要被添加进来的新图片
     * @param animPair 切换图片的动画效果对
     * @param completeHandler 切换动画完成之后的回调函数
     */
    function switchImage(newImage, animPair, completeHandler) {
        animPair.outAnim(currentVisibleImage, function (target) {
            carouselContent.removeChild(target);
        });
        currentVisibleImage = newImage;
        animPair.inAnim(currentVisibleImage, function () {
            if (completeHandler) {
                completeHandler();
            }
        });
        carouselContent.appendChild(currentVisibleImage);
    }

    /**
     * 重新开始用于切换图片的计时器
     */
    function restartSwitchImageTimer() {
        if (switchImageTimerId != -1) {
            clearInterval(switchImageTimerId);
        }

        switchImageTimerId = setInterval(function () {
            switchImageWithEffect();
        }, 3000);
    }

    function init() {

        addListeners();

        addInitCarouselImage();
        restartSwitchImageTimer();
    }

    init();
})();