/**
 * Created by plter on 8/4/16.
 */

(function () {

    // document.body.innerHTML = "<h1>Hello World</h1>";


    for (var i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.innerHTML = "div " + i;
        document.body.appendChild(div);

        div.onclick = function () {
            document.body.removeChild(this);
        }
    }

})();