/**
 * Created by plter on 10/8/16.
 */

window.ucai = window.ucai || {};

(function () {


    /**
     * @class Rectangle
     * @extends Shape
     * @param width
     * @param height
     * @constructor
     */
    function Rectangle(width, height) {
        this._width = width;
        this._height = height;

        ucai.Shape.call(this);
    }

    var p = Rectangle.prototype = new ucai.Shape();

    // p.onUpdate = function () {
    //     this.rotation += 0.01;
    // };

    /**
     *
     * @param {CanvasRenderingContext2D} context
     */
    p.onDraw = function (context) {
        context.fillRect(0, 0, this.width, this.height);
    };

    Object.defineProperties(p, {
        width: {
            set: function (value) {
                this._width = value;
            },
            get: function () {
                return this._width;
            }
        },
        height: {
            set: function (value) {
                this._height = value;
            },
            get: function () {
                return this._height;
            }
        }
    });

    ucai.Rectangle = Rectangle;
})();