/**
 * Created by plter on 2016/8/23.
 */

(function () {

    var div = document.querySelector("#div");
    var menu = document.querySelector("#menu");

    div.addEventListener("contextmenu",function (e) {
        e.preventDefault();

        menu.style.display = "block";
        menu.style.left = e.clientX+"px";
        menu.style.top = e.clientY+"px";
    });

    // document.onclick = function () {
    //     menu.style.display = "none";
    // }

    document.addEventListener("click",function () {
        menu.style.display = "none";
    });
})();