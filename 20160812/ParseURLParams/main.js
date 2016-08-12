/**
 * Created by plter on 8/12/16.
 */

(function () {

    var url = "http://ucai.cn?a=你好&bb=World";

    // console.log(encodeURI(url));

    // var paramsString = url.substring(url.indexOf("#") + 1);
    // var kvStrings = paramsString.split("&");
    //
    // var paramsObject = {};
    //
    // for (var i = 0; i < kvStrings.length; i++) {
    //     var kvString = kvStrings[i];
    //     var kvs = kvString.split("=");
    //     paramsObject[kvs[0]] = kvs[1];
    // }
    //
    // console.log(paramsObject);

    // var p = /(\w+)=(\w+)/g;
    var p = /[#&\?]([^=]+)=([^&]+)/g;

    var obj = {};
    while (true) {
        var result = p.exec(url);
        if (result) {
            obj[result[1]] = result[2];
        } else {
            break;
        }
    }

    console.log(obj);

})();