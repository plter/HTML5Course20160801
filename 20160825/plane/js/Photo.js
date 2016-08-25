/**
 * Created by plter on 8/25/16.
 */

(function () {

    function Photo(imageUrl) {
        this._imageUrl = imageUrl;

        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;

        this._onTickBindThis = this.onTick.bind(this);
    }

    Photo.prototype.css = function (nameOrCssValues, value) {
        switch (typeof nameOrCssValues) {
            case "string":
                this.htmlNode.style[nameOrCssValues] = value;
                break;
            case "object":
                for (var k in nameOrCssValues) {
                    this.css(k, nameOrCssValues[k]);
                }
                break;
        }
    };

    Object.defineProperties(Photo.prototype, {
        /**
         * @type {HTMLImageElement}
         */
        htmlNode: {
            get: function () {
                if (!this._htmlNode) {
                    this._htmlNode = document.createElement("img");
                    this._htmlNode.src = this._imageUrl;
                    this._htmlNode.style.position = "absolute";
                }
                return this._htmlNode;
            }
        },
        x: {
            get: function () {
                return this._x;
            },
            set: function (value) {
                this._x = value;
                this.css("left", this._x + "px");
            }
        },
        y: {
            set: function (value) {
                this._y = value;
                this.css("top", this._y + "px");
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

    Photo.prototype.removeFromParentNode = function () {
        this.htmlNode.parentNode.removeChild(this.htmlNode);
    };

    /**
     * 判断当前图形是否与另一个图形重叠
     * @param photo
     * @returns {*}
     */
    Photo.prototype.hitTest = function (photo) {
        return Tools.rectIntersectsRect(this.x, this.y, this.width, this.height, photo.x, photo.y, photo.width, photo.height);
    };

    /**
     * 开始侦听动画驱动事件
     */
    Photo.prototype.startTick = function () {
        Ticker.addListener(this._onTickBindThis);
    };

    /**
     * 停止侦听动画驱动事件
     */
    Photo.prototype.stopTick = function () {
        Ticker.removeListener(this._onTickBindThis);
    };

    Photo.prototype.onTick = function () {
    };

    window.Photo = Photo;
})();