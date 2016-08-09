/**
 * Created by plter on 8/9/16.
 */

(function () {

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    a.addEventListener("click", function (event) {
        console.log("useCapture : true, a clicked,eventPhase : " + event.eventPhase);
    }, true);
    b.addEventListener("click", function (event) {
        console.log("useCapture : true, b clicked,eventPhase : " + event.eventPhase);
    }, true);
    c.addEventListener("click", function (event) {
        console.log("useCapture : false, c clicked,eventPhase : " + event.eventPhase);
    });
    b.addEventListener("click", function (event) {
        console.log("useCapture : false, b clicked,eventPhase : " + event.eventPhase);
    });
    a.addEventListener("click", function (event) {
        console.log("useCapture : false, a clicked,eventPhase : " + event.eventPhase);
    });


})();