/**
 * Created by plter on 8/20/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     * 用于执行一个动画效果
     * @param {HTMLElement} target    被执行动画效果的HTML节点
     * @param {String} cssProperty 被执行动画效果的css属性的名字
     * @param {Number} from css样式的起始值
     * @param {Number} to css样式的结束值
     * @param {String} suffix css样式值的后缀,默认无
     * @param {Number} duration 动画执行的时间
     * @param {Function} completeHandler 动画执行结束后的回调函数
     */
    ucai.animate = function (target,
                             cssProperty,
                             from,
                             to,
                             suffix,
                             duration,
                             completeHandler) {

        suffix = suffix || "";
        var fps = 50;
        var frameDuration = Math.round(1000 / fps);//四舍五入求整
        var frames = duration / 1000 * fps;//完成该动画共需要的帧数
        var frameIndex = 0;
        var value = from;
        var speed = (to - from) / frames;

        target.style[cssProperty] = from + suffix;

        var id = setInterval(function () {

            value += speed;

            frameIndex++;
            if (frameIndex >= frames) {
                clearInterval(id);

                value = to;

                if (completeHandler) {
                    completeHandler(target);
                }
            }

            target.style[cssProperty] = value + suffix;
        }, frameDuration);
    }

})();