/**
 * Created by plter on 8/9/16.
 */

(function () {

    var cardA = document.querySelector("#container .card-a");
    var cardB = document.querySelector("#container .card-b");
    var container = document.querySelector("#container");
    var playing = false;


    function turnFromTo(from, to) {
        if (!playing) {
            playing = true;
            var widthPercent = 100;
            var speed = widthPercent / 20;

            var id = setInterval(function () {
                widthPercent -= speed;
                from.style.width = widthPercent + "%";

                if (widthPercent <= 0) {
                    clearInterval(id);
                    from.style.display = "none";
                    from.visible = false;
                    to.style.display = "block";
                    to.visible = true;
                    to.style.width = "0";

                    id = setInterval(function () {
                        widthPercent += speed;

                        if (widthPercent >= 100) {
                            widthPercent = 100;
                            clearInterval(id);
                            playing = false;
                        }

                        to.style.width = widthPercent + "%";
                    }, 20);
                }
            }, 20);
        }
    }

    function turnToA() {
        turnFromTo(cardB, cardA);
    }

    function turnToB() {
        turnFromTo(cardA, cardB);
    }

    function init() {

        cardA.visible = true;
        cardB.visible = false;

        container.onclick = function (event) {
            if (cardA.visible) {
                turnToB();
            } else {
                turnToA();
            }
        }
    }

    init();
})();