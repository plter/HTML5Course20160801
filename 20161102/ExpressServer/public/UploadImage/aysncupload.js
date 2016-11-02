/**
 * Created by plter on 2016/11/2.
 */

(function () {

    var form = document.querySelector("form");
    var resultDiv = document.querySelector("#result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            console.log(xhr.responseText);

            resultDiv.innerHTML = "<img src='" + xhr.responseText + "'>";
        });

        xhr.open("POST", "/apis/upload");
        var fd = new FormData(this);
        xhr.send(fd);
    });

})();