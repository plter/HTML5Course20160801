/**
 * Created by plter on 8/4/16.
 */

(function () {

    // var divs = document.getElementsByClassName("div");

    var divs = document.getElementsByTagName("div");

    for (var i = 0; i < divs.length; i++) {
        divs[i].innerHTML = "div " + i;
    }

})();