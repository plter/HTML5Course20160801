/**
 * Created by plter on 2016/10/31.
 */


(function () {

    function callback(data) {
        console.log(data);
    }

    window.callback = callback;

    function load() {
        var script = document.createElement("script");
        script.src = "http://localhost:3000/data.js";
        document.body.appendChild(script);
    }

    load();
})();