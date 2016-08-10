/**
 * Created by plter on 8/10/16.
 */


(function () {

    var container = document.querySelector("#container");

    window.onhashchange = function (event) {
        changePage();
    };

    function changePage() {
        var hashObj = {};

        var hashString = location.hash;
        if (hashString && hashString != "") {
            var kvStrs = location.hash.substr(1).split("&");
            for (var i = 0; i < kvStrs.length; i++) {
                var kv = kvStrs[i].split("=");
                hashObj[kv[0]] = kv[1];
            }
        }

        switch (hashObj.page) {
            case "2":
                container.innerHTML = "<img src='photo.jpg'>";
                break;
            default:
                container.innerHTML = "<h1>Hello World</h1>";
                break;
        }
    }

    changePage();

})();