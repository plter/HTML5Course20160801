/**
 * Created by plter on 8/8/16.
 */
(function () {

    // var btn = document.getElementById("btn");

    // btn.onclick = function (event) {
    //     console.log(event);
    // }

    // btn.ontouchstart = function (event) {
    //     console.log(event);
    // }

    var div = document.getElementById("div");
    // div.addEventListener("touchstart", function (event) {
    //     console.log(event);
    // });
    // div.ontouchstart = function (event) {
    //     console.log(event);
    // }

    // div.onclick = function (event) {
    //     console.log(1);
    //
    //     div.onclick = null;
    // };
    //
    // div.onclick = function (event) {
    //     console.log(2);
    // }

    // function divClickedHandler(event) {
    //     // div.removeEventListener("click", divClickedHandler);
    //     console.log(event.target);
    // }

    // div.addEventListener("click", divClickedHandler);
    // div.addEventListener("click",function (event) {
    //     console.log(2);
    // });


    div.onmousemove = function (event) {
        console.log(event);
    }
})();