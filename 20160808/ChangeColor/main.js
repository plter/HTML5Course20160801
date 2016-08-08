/**
 * Created by plter on 8/8/16.
 */

(function () {

    var colors = ["red", "green", "blue"];
    var index = 0;

    document.getElementById("div").addEventListener("click",
        function (event) {

        index++;

        if (index >= colors.length) {
            index = 0;
        }

        event.target.style.backgroundColor = colors[index];
    });

})();