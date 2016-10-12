/**
 * Created by plter on 10/12/16.
 */

(function () {

    function start() {
        var total = 10000;
        for (var i = 0; i <= total; i++) {
            console.log(i);

            if (i % 1000 == 0) {
                postMessage((i * 100 / total) + "%");
            }
        }
    }

    onmessage = function (e) {
        if (e.data = "start") {
            start();
        }
    }

})();