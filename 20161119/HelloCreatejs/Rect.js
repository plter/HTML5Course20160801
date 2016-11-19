/**
 * Created by plter on 2016/11/19.
 */

(function () {

    function Rect() {

        createjs.Shape.call(this);

        this.graphics.beginFill("red").drawRect(0, 0, 100, 100);

        this.addEventListener("tick", function () {
            this.x++;
        }.bind(this));
    }

    Rect.prototype = new createjs.Shape();


    window.Rect = Rect;
})();