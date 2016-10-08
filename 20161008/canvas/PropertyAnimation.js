/**
 * Created by plter on 10/8/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     *
     * @param {Shape} target
     * @param {String} propertyName
     * @param {Number} from
     * @param {Number} to
     * @param {Number} frames
     * @constructor
     */
    function PropertyAnimation(target, propertyName, from, to, frames) {
        var speed = (to - from) / frames;
        var frameCount = 0;

        var handler = function () {
            target[propertyName] += speed;

            frameCount++;

            if (frameCount >= frames) {
                ucai.RenderHandler.removeHandler(handler);
                target[propertyName] = to;
            }
        };

        target[propertyName] = from;
        ucai.RenderHandler.addHandler(handler);
    }

    ucai.PropertyAnimation = PropertyAnimation;
})();