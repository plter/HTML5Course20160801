/**
 * Created by plter on 10/8/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     * @class Circle
     * @extends Shape
     * @param r
     * @constructor
     */
    function Circle(r) {
        this._r = r;
    }

    var p = Circle.prototype = new ucai.Shape();

    /**
     * @protected
     * @param {CanvasRenderingContext2D} context
     */
    p.onDraw = function (context) {
        context.beginPath();
        context.arc(0, 0, this._r, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    };

    ucai.Circle = Circle;
})();