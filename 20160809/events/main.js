/**
 * Created by plter on 8/9/16.
 */


(function () {

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    a.onclick = function (event) {
        console.log("a clicked");
    };

    b.onclick = function (event) {
        console.log("b clicked");
    };

    c.onclick = function (event) {
        console.log("c clicked");
    }
})();