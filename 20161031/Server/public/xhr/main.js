/**
 * Created by plter on 2016/10/31.
 */

(function () {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        console.log(xhr.readyState);

        if (xhr.readyState == 4) {
            console.log(JSON.parse(xhr.responseText));
        }
    });

    console.log(xhr.readyState);
    xhr.open("GET", "/data.json");
    xhr.send();

})();