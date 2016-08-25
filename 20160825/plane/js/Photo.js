/**
 * Created by plter on 8/25/16.
 */

(function () {

    function Photo(imageUrl) {
        this._imageUrl = imageUrl;

        this._x = 0;
        this._y = 0;
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
        }
    });


    window.Photo = Photo;
})();