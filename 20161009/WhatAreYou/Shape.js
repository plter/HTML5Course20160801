/**
 * Created by plter on 10/8/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     * @class Shape
     * @constructor Shape
     */
    function Shape(context) {
        this._x = 0;
        this._y = 0;
        this._rotation = 0;
        this._context = context;
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
        },
        context: {
            get: function () {
                return this._context;
            }
        }
    });

    p.render = function () {
        this.onUpdate();

        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.rotate(this.rotation);
        this.context.fillStyle = this.color;

        this.onDraw();

        this.context.restore();
    };

    /**
     * @protected
     * @abstract
     */
    p.onDraw = function () {
    };

    /**
     * @abstract
     */
    p.onUpdate = function () {
    };

    ucai.Shape = Shape;
})();