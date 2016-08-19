/**
 * Created by plter on 8/19/16.
 */


(function () {

    function Card(width, height) {
        var self = {};

        var htmlNode;
        var divA, divB;
        var aVisible = true;

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


        function addListeners() {
            htmlNode.addEventListener("click", function () {
                if (aVisible) {
                    self.showB();
                } else {
                    self.showA();
                }
            });
        }

        function init() {
            htmlNode = document.createElement("div");
            htmlNode.className = "card";
            htmlNode.style.width = width + "px";
            htmlNode.style.height = height + "px";

            divA = document.createElement("div");
            divA.className = "div-a";
            htmlNode.appendChild(divA);

            divB = document.createElement("div");
            divB.className = "div-b";
            htmlNode.appendChild(divB);

            self.showA();
            addListeners();
        }

        init();

        return self;
    }

    window.Card = Card;
})();