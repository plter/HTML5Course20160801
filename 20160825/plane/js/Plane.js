/**
 * Created by plter on 8/25/16.
 */

(function () {

    function Plane(imageUrl) {
        Photo.call(this, imageUrl);

        this.x = 550;
        this.y = 20;
        this._speedX = -4;

        this.addListener();
    }

    Plane.prototype = new Photo();

    Plane.prototype.addListener = function () {
        var tickerListener = function () {

            this.x += this._speedX;

            if (this.x < -70) {
                Ticker.removeListener(tickerListener);
                Plane.removePlane(this);
            }
        }.bind(this);

        Ticker.addListener(tickerListener);
    };

    Plane.createPlane = function () {
        var index = Math.floor(Math.random() * Plane.__planeImageUrls.length)
        var p = new Plane(Plane.__planeImageUrls[index]);
        Plane.__planes.push(p);
        return p;
    };

    Plane.removePlane = function (plane) {
        Plane.__planeImageUrls.removeItem(plane);
        plane.removeFromParentNode();
    };

    Plane.__planeImageUrls = [
        "res/plane0001.png",
        "res/plane0002.png",
        "res/plane0003.png",
        "res/plane0004.png",
        "res/plane0005.png"
    ];
    Plane.__planes = [];

    window.Plane = Plane;
})();