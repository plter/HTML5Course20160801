/**
 * Created by plter on 8/5/16.
 */

(function () {

    var width = 1;
    var bar = document.querySelector(".bar");
    var txt = document.querySelector(".txt");

    function syncBarWidth() {
        var cssValue = width + "%";
        txt.innerHTML = cssValue;
        bar.style.width = cssValue;
    }

    var id = setInterval(function () {
        width++;
        syncBarWidth();

        if (width >= 100) {
            clearInterval(id);
        }
    }, 50);

    syncBarWidth();
})();