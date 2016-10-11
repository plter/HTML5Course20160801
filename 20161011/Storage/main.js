/**
 * Created by plter on 10/11/16.
 */

(function () {

    var text = document.querySelector("#text");
    var storage = sessionStorage;

    text.addEventListener("keyup", function () {
        storage.setItem("data", text.value);
    });

    text.value = storage.getItem("data");

})();