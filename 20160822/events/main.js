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

    // a.addEventListener("click", function (e) {
    //     console.log("click 1");
    // });
    a.addEventListener("click", function (e) {
        console.log("a clicked,事件阶段："+e.eventPhase);
    });

    b.addEventListener("click",function (e) {
        console.log("b clicked,事件阶段："+e.eventPhase);
    });
    //
    c.addEventListener("click",function (e) {
        console.log("c clicked");
        // e.stopPropagation();
        e.stopImmediatePropagation();
    });

    a.addEventListener("click",function (e) {
        console.log("a clicked,事件阶段："+e.eventPhase);
    },true);
    b.addEventListener("click",function (e) {
        console.log("b clicked,事件阶段："+e.eventPhase);
    },true);
    c.addEventListener("click",function (e) {
        console.log("c clicked,事件阶段："+e.eventPhase);
    },true);

})();