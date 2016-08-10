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

        var hashString = location.hash;//#page=1&title=Page1
        if (hashString && hashString != "") {
            hashString = hashString.substr(1);//page=1&title=Page1
            var kvStrs = hashString.split("&");//["page=1","title=Page1"]
            for (var i = 0; i < kvStrs.length; i++) {
                //i=0时,kvStrs[i]="page=1"
                var kv = kvStrs[i].split("=");//i=0时,kv = ["page","1"]
                hashObj[kv[0]] = kv[1];
            }
        }

        switch (hashObj.page) {
            case "2":
                container.innerHTML = "<img src='photo.jpg'>";
                document.title = hashObj.title;
                break;
            default:
                container.innerHTML = "<h1>Hello World</h1>";
                document.title = hashObj.title;
                break;
        }
    }

    changePage();

})();