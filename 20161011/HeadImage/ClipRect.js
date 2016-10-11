/**
 * Created by plter on 10/11/16.
 */

window.hi = window.hi || {};

(function () {

    function ClipRect(x, y, width, heigth) {
        this._width = width;
        this._height = heigth;
        this._x = x;
        this._y = y;
    }

    var p = ClipRect.prototype;

    p.draw = function (context) {
        context.beginPath();
        context.rect(this._x, this._y, this._width, this._height);
        context.closePath();
        context.clip();
    };

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

    hi.ClipRect = ClipRect;
})();