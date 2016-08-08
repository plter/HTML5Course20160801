/**
 * Created by plter on 8/8/16.
 */

(function () {

    var div = document.getElementById("div");

    div.addEventListener("contextmenu", function (event) {
        event.preventDefault();//阻止事件默认行为
    });

})();