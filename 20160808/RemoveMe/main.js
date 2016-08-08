/**
 * Created by plter on 8/8/16.
 */

(function () {

    function div_clickedHandler(event) {
        document.body.removeChild(event.target);
    }


    for (var i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.innerHTML = "Item " + i;
        document.body.appendChild(div);

        div.addEventListener("click", div_clickedHandler);
    }
})();