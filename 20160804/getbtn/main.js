/**
 * Created by plter on 8/4/16.
 */

(function () {

    var btn = document.getElementById("btn");
    btn.innerHTML = "Click me";

    btn.onclick = function () {
        alert("按钮被点击了");
    }
})();