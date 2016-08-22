/**
 * Created by plter on 8/22/16.
 */

(function () {

    function Rect() {

        this._htmlNode = document.createElement("div");
        this._htmlNode.style.width = "200px";
        this._htmlNode.style.height = "200px";
        this._htmlNode.style.backgroundColor = "red";
        this._htmlNode.style.margin = "5px";
        this._isRed = true;

        var self = this;
        this._htmlNode.onclick = function () {

            console.log(this);

            if (self._isRed) {
                self.getHtmlNode().style.backgroundColor = "green";
                self._isRed = false;
            } else {
                self.getHtmlNode().style.backgroundColor = "red";
                self._isRed = true;
            }
        }
    }

    Rect.prototype.getHtmlNode = function () {
        return this._htmlNode;
    };

    window.Rect = Rect;
})();