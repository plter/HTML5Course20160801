/**
 * Created by plter on 8/25/16.
 */

(function () {

    function Gun() {
        Photo.call(this, "res/gun.png");

        this.x = 250;
        this.y = 350;
    }

    Gun.prototype = new Photo();

    Gun.prototype.moveLeft = function () {
        this.x -= 5;
    };

    Gun.prototype.moveRight = function () {
        this.x += 5;
    };

    window.Gun = Gun;
})();