/**
 * Created by plter on 10/9/16.
 */
(function () {

    var SRC = [
        "Shape.js",
        "Text.js",
        "Button.js",
        "main.js"
    ];

    for (var i = 0; i < SRC.length; i++) {
        var file = SRC[i];

        /**
         *
         * @type {HTMLScriptElement}
         */
        var script = document.createElement("script");
        script.async = false;
        script.src = file;
        document.body.appendChild(script);
    }
})();