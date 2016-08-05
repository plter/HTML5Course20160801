/**
 * Created by plter on 8/5/16.
 */

(function () {

    var trs = document.querySelectorAll("tr");

    trs[0].style.backgroundColor = "red";

    for (var i = 1; i < trs.length; i++) {
        trs[i].style.backgroundColor = i % 2 == 0 ? "green" : "blue";
    }

})();