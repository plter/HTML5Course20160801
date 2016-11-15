/**
 * Created by plter on 2016/11/15.
 */

(function () {


    function load(url) {
        return new Promise(function (ok, rej) {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                ok(xhr.responseText);
            };
            xhr.onerror = function (e) {
                rej(e);
            };

            xhr.open("GET", url);
            xhr.send();
        })
    }

    async function run() {
        let data = await load("data.txt");
        console.log(data);
    }

    run();
})();