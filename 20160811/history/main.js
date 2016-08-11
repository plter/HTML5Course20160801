/**
 * Created by plter on 8/11/16.
 */


(function () {

    var btnBack = document.getElementById("btnback");
    var btnForward = document.getElementById("btnforward");

    btnBack.onclick = function () {
        history.back();
    };

    btnForward.onclick = function () {
        history.forward();
    }

})();