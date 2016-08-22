/**
 * Created by plter on 8/22/16.
 */

(function () {

    var rect = document.querySelector(".rect");
    var isRed = true;

    rect.onclick = function () {
        if (isRed) {
            rect.style.backgroundColor = "green";
            isRed = false;
        } else {
            rect.style.backgroundColor = "red";
            isRed = true;
        }
    }

})();