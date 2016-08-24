/**
 * Created by plter on 2016/8/24.
 */


(function () {
    function Ball() {
        this._htmlNode = document.createElement("div");
        this._htmlNode.className = "ball";
        this._x = Math.random()*400;
        this._y = Math.random()*300;
        this.refreshPosition();

        this._speedX = Math.random()*10-5;
        this._speedY = Math.random()*10-5;

        // this._htmlNode.style.border = "solid";
        // this._htmlNode.style.width = "30px";
        // this._htmlNode.style.height = "30px";
        // this._htmlNode.style.borderRadius = "50%";
        // this._htmlNode.style.backgroundColor = "#cccccc";
    }

    Ball.prototype.move = function () {
        this._x+=this._speedX;
        this._y+=this._speedY;

        this.refreshPosition();
    };
    
    Ball.prototype.getHtmlNode = function () {
        return this._htmlNode;
    };

    Ball.prototype.refreshPosition = function () {
        this._htmlNode.style.left = this._x+"px";
        this._htmlNode.style.top = this._y+"px";
    };
    
    window.Ball = Ball;
})();