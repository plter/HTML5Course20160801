/**
 * Created by plter on 10/8/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     * @class Shape
     * @constructor Shape
     */
    function Shape() {
        this._x = 0;
        this._y = 0;
        this._rotation = 0;
    }

    var p = Shape.prototype;

    Object.defineProperties(p, {
        x: {
            set: function (value) {
                this._x = value;
            },
            get: function () {
                return this._x;
            }
        },
        y: {
            set: function (value) {
                this._y = value;
            },
            get: function () {
                return this._y;
            }
        },
        color: {
            set: function (value) {
                this._color = value;
            },
            get: function () {
                return this._color;
            }
        },
        rotation: {
            set: function (value) {
                this._rotation = value;
            },
            get: function () {
                return this._rotation;
            }
        }
    });

    /**
     *
     * @param {CanvasRenderingContext2D} context
     */
    p.render = function (context) {
        this.onUpdate();

        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.fillStyle = this.color;

        this.onDraw(context);

        context.restore();
    };

    /**
     * @protected
     * @abstract
     * @param context
     */
    p.onDraw = function (context) {
    };

    /**
     * @abstract
     */
    p.onUpdate = function () {
    };

    ucai.Shape = Shape;
})();