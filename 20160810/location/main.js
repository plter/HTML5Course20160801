/**
 * Created by plter on 8/10/16.
 */


(function () {

    // var hash = location.hash.substr(1);
    var hash = location.search.substr(1);
    var strings = hash.split("&");
    var hashObj = {};
    for (var i = 0; i < strings.length; i++) {
        var kv = strings[i].split("=");
        hashObj[kv[0]] = kv[1];
    }

    switch (hashObj.type) {
        case "text":
            document.body.innerHTML = "<h1>Hello World</h1>"
            break;
        case "image":
            document.body.innerHTML = "<img src='img.jpg'>";
            break;
    }

})();