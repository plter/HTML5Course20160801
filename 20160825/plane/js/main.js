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

    (function () {
        createGun();
        addListeners();
        startTick();
    })();
})();