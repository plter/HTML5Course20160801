/**
 * Created by plter on 10/12/16.
 */


(function () {

    var text = document.querySelector("#text");
    var targetContainer = document.querySelector("#target-container");

    function addListeners() {
        text.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("text/plain", text.id);
        });

        targetContainer.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        targetContainer.addEventListener("drop", function (e) {
            e.preventDefault();
            // console.log(e.dataTransfer.getData("text/plain"));

            var element = document.getElementById(e.dataTransfer.getData("text/plain"));
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
            this.appendChild(element);
        });
    }

    function init() {
        addListeners();
    }

    init();
})();