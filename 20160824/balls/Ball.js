/**
 * Created by plter on 2016/8/24.
 */


(function () {
    function Ball() {
        this._htmlNode = document.createElement("div");
        this._htmlNode.className = "ball";
        this._x = Math.random()*400;
        this._y = Math.random()*300;
        this._r = 15;
        // this.refreshPosition();

        this._speedX = Math.random()*10-5;
        this._speedY = Math.random()*10-5;

        // this._htmlNode.style.border = "solid";
        // this._htmlNode.style.width = "30px";
        // this._htmlNode.style.height = "30px";
        // this._htmlNode.style.borderRadius = "50%";
        // this._htmlNode.style.backgroundColor = "#cccccc";
    }

    Ball.prototype.move = function () {
        this.x+=this._speedX;
        this.y+=this._speedY;

        if(this.x<-this._r*2||
        this.y<-this._r*2||
        this.x>window.innerWidth||
        this.y>window.innerHeight){

            Ball.removeBall(this);
        }

        // this.refreshPosition();
    };
    
    // Ball.prototype.getHtmlNode = function () {
    //     return this._htmlNode;
    // };
    
    Object.defineProperty(Ball.prototype,"htmlNode",{
        get:function () {
            return this._htmlNode;
        }
    });

    Object.defineProperty(Ball.prototype,"x",{
        get:function () {
            return this._x;
        },
        set:function (value) {
            this._x = value;
            this.htmlNode.style.left = this._x+"px";
        }
    });

    Object.defineProperty(Ball.prototype,"y",{
        get:function () {
            return this._y;
        },
        set:function (value) {
            this._y = value;
            this.htmlNode.style.top = this._y+"px";
        }
    });

    // Ball.prototype.refreshPosition = function () {
    //     this._htmlNode.style.left = this._x+"px";
    //     this._htmlNode.style.top = this._y+"px";
    // };

    Ball.__balls = [];

    Ball.createBall = function () {
        var b = new Ball();
        document.body.appendChild(b.htmlNode);
        Ball.__balls.push(b);
        return b;
    };
    
    Ball.removeBall = function (ball) {
        ball.htmlNode.parentNode.removeChild(ball.htmlNode);
        Ball.__balls.removeItem(ball);
    };
    
    Ball.moveBalls = function () {
        for(var i = 0;i<Ball.__balls.length;i++){
            Ball.__balls[i].move();
        }
    };
    window.Ball = Ball;
})();