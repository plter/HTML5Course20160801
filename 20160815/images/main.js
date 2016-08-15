/**
 * Created by plter on 8/15/16.
 */


(function () {


    var content = document.querySelector("#content");
    var contentX = 0;


    setInterval(function () {
        contentX--;

        // content.style.left = contentX + "px";
        content.style.transform = "translateX(" + contentX + "px)";
    }, 100);

})();