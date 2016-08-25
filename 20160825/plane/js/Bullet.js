/**
 * Created by plter on 8/25/16.
 */

(function () {

    function Bullet() {
        Photo.call(this, "res/bullet.png");

        this.width = 8;
        this.height = 16;
        this._speedY = -3;
        this.startTick();
    }

    Bullet.prototype = new Photo();

    Bullet.prototype.onTick = function () {
        this.y += this._speedY;

        var p;
        for (var i = 0; i < Plane.getPlanes().length; i++) {
            p = Plane.getPlanes()[i];
            if (p.hitTest(this)) {

                this.stopTick();
                this.removeFromParentNode();

                Plane.removePlane(p);
                break;
            }
        }

        if (this.y < -15) {
            this.stopTick();
            this.removeFromParentNode();
        }
    };

    window.Bullet = Bullet;
})();