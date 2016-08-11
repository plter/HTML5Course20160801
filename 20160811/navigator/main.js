/**
 * Created by plter on 8/11/16.
 */

(function () {

    var userAgent = navigator.userAgent;
    console.log(userAgent);

    if (userAgent.indexOf("MSIE 5") != -1 ||
        userAgent.indexOf("MSIE 6") != -1 ||
        userAgent.indexOf("MSIE 7") != -1 ||
        userAgent.indexOf("MSIE 8") != -1) {

        document.body.innerHTML = "<h1 style='color: red'>请使用IE9及更高版本的浏览器或者换用Chrome、Firefox</h1>"
    } else {
        document.body.innerHTML = "<h1>内容正常显示</h1>";
    }
})();