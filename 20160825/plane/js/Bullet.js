/**
 * Created by plter on 8/25/16.
 */

(function () {

    function Bullet() {
        Photo.call(this, "res/bullet.png");

        this._speedY = -8;
        this.addTickListener();
    }

    Bullet.prototype = new Photo();

    Bullet.prototype.addTickListener = function () {
        var tickHandler = function () {
            this.y += this._speedY;

            if (this.y < -15) {
                Ticker.removeListener(tickHandler);
                this.removeFromParentNode();
            }
        }.bind(this);

        Ticker.addListener(tickHandler);
    };

    window.Bullet = Bullet;
})();