/**
 * Created by plter on 8/20/16.
 */


(function () {

    var gameDiv = document.querySelector("#game-div");
    var allPoints = [];
    var currentNumber = 1;
    var cards = [];


    function createPoints() {
        allPoints.length = 0;

        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                allPoints.push({x: 50 * i, y: 50 * j});
            }
        }
    }

    function cClickedHandler(card) {
        if (currentNumber == card.getNumber()) {
            gameDiv.removeChild(card.getHtmlNode());

            var index = cards.indexOf(card);
            if (index != -1) {
                cards.splice(index, 1);

                if (currentNumber == 1) {
                    for (var i = 0; i < cards.length; i++) {
                        cards[i].turnToB();
                    }
                }

                if (cards.length <= 0) {
                    alert("成功了");
                }
            }

            currentNumber++;
        } else {
            alert("点错了");
        }
    }


    function addCards() {

        cards.length = 0;

        for (var i = 1; i <= 6; i++) {
            var c = new ucai.Card(i);
            gameDiv.appendChild(c.getHtmlNode());
            cards.push(c);

            var index = Math.floor(Math.random() * allPoints.length);
            c.setPosition(allPoints[index]);
            allPoints.splice(index, 1);
            c.onclick = cClickedHandler;
        }
    }

    function init() {
        currentNumber = 1;
        createPoints();
        addCards();
    }

    init();
})();