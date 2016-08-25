/**
 * Created by plter on 8/25/16.
 */

(function () {

    var game = document.getElementById("game");
    var gun;

    function createGun() {
        gun = new Gun();
        game.appendChild(gun.htmlNode);
    }

    function addBullet() {
        var b = new Bullet();
        b.x = gun.x + 21;
        b.y = gun.y;
        game.appendChild(b.htmlNode);
    }

    function addListeners() {
        document.onkeydown = function (e) {
            switch (e.key) {
                case "ArrowLeft":
                    gun.moveLeft();
                    break;
                case "ArrowRight":
                    gun.moveRight();
                    break;
                case " ":
                    addBullet();
                    break;
            }
        }
    }

    function startTick() {
        Ticker.start();
    }

    function startAddPlane() {
        game.appendChild(Plane.createPlane().htmlNode);

        setTimeout(startAddPlane, Math.floor(Math.random() * 2000 + 1000));
    }

    (function () {
        createGun();
        addListeners();
        startTick();
        startAddPlane();
    })();
})();