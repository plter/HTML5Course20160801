/**
 * Created by plter on 8/12/16.
 */

(function () {

    var rect = document.querySelector("#rect");

    var rectX = 0, rectY = 0, offsetX, offsetY;

    rect.onmousedown = function (event) {
        offsetX = rectX - event.pageX;
        offsetY = rectY - event.pageY;

        document.onmousemove = function (event) {
            rectX = event.pageX + offsetX;
            rectY = event.pageY + offsetY;

            rect.style.left = rectX + "px";
            rect.style.top = rectY + "px";
        };

        document.onmouseup = function (event) {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

})();