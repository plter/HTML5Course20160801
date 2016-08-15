/**
 * Created by plter on 8/15/16.
 */

(function () {

    function css(target, styles) {
        for (var k in styles) {
            target.style[k] = styles[k];
        }
    }

    var container = document.querySelector("#container");
    var content = document.querySelector("#content");
    var colors = ["red", "green", "blue", "yellow"];
    var divIndex = 0;
    var contentX = 0;
    var animationFrames = 25;
    var switchDivDuration = 3000;

    var WIDTH = 400;
    var HEIGHT = 300;
    css(container, {
        width: WIDTH + "px",
        height: HEIGHT + "px",
        overflow: "hidden",
        border: "solid"
    });
    css(content, {
        width: (WIDTH * colors.length) + "px",
        height: HEIGHT + "px",
        position: "relative"
    });

    function addDivs() {
        for (var i = 0; i < colors.length; i++) {
            var div = document.createElement("div");
            css(div, {
                width: WIDTH + "px",
                height: HEIGHT + "px",
                backgroundColor: colors[i],
                float: "left"
            });
            content.appendChild(div);
        }
    }

    function startTimer() {
        setInterval(function () {
            divIndex++;

            if (divIndex >= colors.length) {
                divIndex = 0;
            }

            //定义动画结束点的位置
            var endX = -WIDTH * divIndex;
            var startX = contentX;
            var speed = (endX - startX) / animationFrames;//计算用25帧来完成的动画的帧速度
            var distance = Math.abs(endX - contentX);

            var id = setInterval(function () {
                contentX += speed;

                if (Math.abs(contentX - startX) > distance) {
                    clearInterval(id);
                    contentX = endX;
                }

                content.style.left = contentX + "px";
            }, 20);//定义一个计时器,用于执行动画,如果时间间隔设置为20,则意味着该动画是帧频为50的动画
        }, switchDivDuration);
    }


    addDivs();
    startTimer();
})();