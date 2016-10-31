/**
 * Created by plter on 2016/10/31.
 */


(function () {

    // function callback(data) {
    //     console.log(data);
    // }
    //
    // window.callback = callback;
    //
    // function load() {
    //     var script = document.createElement("script");
    //     script.src = "http://localhost:3000/data.js";
    //     document.body.appendChild(script);
    // }
    //
    // load();


    function jsonpLoad(url, callback) {
        var callbackName = "ucaicallback" + Date.now() + Math.floor(Math.random() * 100000000)
        window[callbackName] = callback;

        var script = document.createElement("script");
        script.src = url + "?callback=" + callbackName + "&_=" + Math.random();
        document.body.appendChild(script);
    }

    jsonpLoad("http://localhost:3000/data.jsonp", function (data) {
        console.log(data);
    });

})();