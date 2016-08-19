/**
 * Created by plter on 8/19/16.
 */

window.ucai = window.ucai || {};


(function () {

    function Card(width, height) {
        var self = {};

        var htmlNode;
        var divA, divB;
        var aVisible = true;
        var speed = 6;
        var animating = false;

        function addListeners() {
            htmlNode.addEventListener("click", function () {
                if (aVisible) {
                    self.turnToB();
                } else {
                    self.turnToA();
                }
            });
        }

        function init() {
            htmlNode = document.createElement("div");
            htmlNode.className = "card";
            htmlNode.style.width = width + "px";
            htmlNode.style.height = height + "px";

            divA = document.createElement("div");
            divA.className = "div-a card-content";
            htmlNode.appendChild(divA);

            divB = document.createElement("div");
            divB.className = "div-b card-content";
            htmlNode.appendChild(divB);

            self.showA();
            addListeners();
        }

        self.getHtmlNode = function () {
            return htmlNode;
        };

        self.getWidth = function () {
            return width;
        };

        self.getHeight = function () {
            return height;
        };

        self.showA = function () {
            divA.style.display = "block";
            divB.style.display = "none";
            aVisible = true;
        };

        self.showB = function () {
            divA.style.display = "none";
            divB.style.display = "block";
            aVisible = false;
        };

        self.turnToB = function () {
            if (!animating && aVisible) {
                animating = true;
                var width = 100;

                var id = setInterval(function () {
                    width -= speed;
                    divA.style.width = width + "%";

                    if (width <= 0) {
                        width = 0;
                        self.showB();
                        clearInterval(id);
                        divB.style.width = 0;

                        id = setInterval(function () {
                            width += speed;
                            if (width >= 100) {
                                width = 100;
                                clearInterval(id);
                                animating = false;
                            }
                            divB.style.width = width + "%";
                        }, 20);
                    }
                }, 20);
            }
        };

        self.turnToA = function () {
            if (!animating && !aVisible) {
                animating = true;
                var width = 100;

                var id = setInterval(function () {
                    width -= speed;

                    divB.style.width = width + "%";

                    if (width <= 0) {
                        width = 0;
                        clearInterval(id);

                        self.showA();
                        divA.style.width = 0;

                        id = setInterval(function () {
                            width += speed;

                            if (width >= 100) {
                                width = 100;
                                clearInterval(id);
                                animating = false;
                            }

                            divA.style.width = width + "%";
                        }, 20);
                    }
                }, 20);
            }
        };

        init();
        return self;
    }

    ucai.Card = Card;
})();