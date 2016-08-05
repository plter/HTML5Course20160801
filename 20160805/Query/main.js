/**
 * Created by plter on 8/5/16.
 */


(function () {

    var e = document.querySelector(".container");
    e.innerHTML = "Hello World";

    var es = document.querySelectorAll("div");

    for (var i = 0; i < es.length; i++) {
        es[i].innerHTML = "Hello World";
    }
})();