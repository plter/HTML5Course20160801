/**
 * Created by plter on 8/20/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Card(number) {
        this._width = 48;
        this._height = 48;
        this._number = number;

        this._htmlNode = document.createElement("div");
        this._htmlNode.className = "card2d";
        this._cardA = document.createElement("div");
        this._cardA.className = "card card-a";
        this._cardA.innerHTML = "" + this._number;
        this._htmlNode.appendChild(this._cardA);
        this._cardB = document.createElement("div");
        this._cardB.className = "card card-b";
        this._htmlNode.appendChild(this._cardB);

        this._htmlNode.style.width = this._width + "px";
        this._htmlNode.style.height = this._height + "px";

        this.showA();

        var self = this;
        this._htmlNode.addEventListener("click", function (e) {
            if (self.onclick) {
                self.onclick(self);
            }
        });
    }

    var p = Card.prototype;

    p.getWidth = function () {
        return this._width;
    };

    p.getHeight = function () {
        return this._height;
    };

    p.showA = function () {
        this._cardA.style.display = "block";
        this._cardB.style.display = "none";
        this._aVisble = true;
    };

    p.showB = function () {
        this._cardA.style.display = "none";
        this._cardB.style.display = "block";
        this._aVisble = false;
    };

    p.isAVisible = function () {
        return this._aVisble;
    };

    p.getHtmlNode = function () {
        return this._htmlNode;
    };

    p.getNumber = function () {
        return this._number;
    };

    /**
     * 设置位置
     * @param {number|Object} xOrPosition
     * @param {number} y
     */
    p.setPosition = function (xOrPosition, y) {
        switch (arguments.length) {
            case 1:
                this._htmlNode.style.left = xOrPosition.x + "px";
                this._htmlNode.style.top = xOrPosition.y + "px";
                break;
            case 2:
                this._htmlNode.style.left = xOrPosition + "px";
                this._htmlNode.style.top = y + "px";
                break;
        }
    };

    p.turnToB = function () {
        if (!this._animating && this.isAVisible()) {
            this._animating = true;
            var self = this;
            ucai.animate(this._cardA, "width", 100, 0, "%", 200, function (target) {
                self.showB();

                ucai.animate(self._cardB, "width", 0, 100, "%", 200, function (target) {
                    self._animating = false;
                });
            });
        }
    };


    ucai.Card = Card;
})();