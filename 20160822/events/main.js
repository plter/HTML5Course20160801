/**
 * Created by plter on 8/22/16.
 */

(function () {

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    // a.onclick = function (e) {
    //     console.log("click 1");
    //
    //     // a.onclick = null;
    // };
    //
    // a.onclick = function () {
    //     console.log("click 2");
    // }

    // function clickHandler(e) {
    //
    //     console.log(e);
    //
    //     a.removeEventListener("click", clickHandler);
    // }

    // a.addEventListener("click", clickHandler);

    a.addEventListener("click", function (e) {
        console.log("click 1");
    });
    a.addEventListener("click", function (e) {
        console.log("click 2");
    });

})();