/**
 * Created by plter on 8/11/16.
 */

(function () {

    var div = document.querySelector("#div");
    var menu = document.querySelector("#menu");

    div.oncontextmenu = function (event) {
        event.preventDefault();

        menu.style.display = "block";

        menu.style.left = event.pageX + "px";
        menu.style.top = event.pageY + "px";
    };

    document.onclick = function (event) {
        menu.style.display = "none";
    }

})();