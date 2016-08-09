/**
 * Created by plter on 8/9/16.
 */


(function () {

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    // a.onclick = function (event) {
    //     console.log("a clicked");
    // };
    //
    // b.onclick = function (event) {
    //     console.log("b clicked");
    // };

    // c.onclick = function (event) {
    //     console.log("c clicked");
    //
    //     event.stopPropagation();
    // }

    c.addEventListener("click", function (event) {
        console.log("c click 1");
        // event.stopImmediatePropagation();

        // event.stopPropagation();
    });
    c.addEventListener("click", function (event) {
        console.log("c click 2");
    });
    c.addEventListener("click", function (event) {
        console.log("c click 3");
    }, true);

    a.addEventListener("click", function (event) {
        console.log("捕获阶段 click a");

        event.stopPropagation();
    }, true);

    b.addEventListener("click", function (event) {
        console.log("捕获阶段 click b");
    }, true);

})();