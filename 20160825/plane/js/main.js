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

    function addListeners() {
        document.onkeydown = function (e) {
            switch (e.key) {
                case "ArrowLeft":
                    gun.moveLeft();
                    break;
                case "ArrowRight":
                    gun.moveRight();
                    break;
            }
        }
    }

    (function () {
        createGun();
        addListeners();
    })();
})();