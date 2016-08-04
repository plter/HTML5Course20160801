/**
 * Created by plter on 8/4/16.
 */

(function () {

    function formatDate(num) {
        if (num < 10) {
            return "0" + num;
        } else {
            return num;
        }
    }

    function init() {
        var date = new Date();

        document.body.innerHTML = date.getFullYear() +
            "-" + formatDate((date.getMonth() + 1)) +
            "-" + formatDate(date.getDate()) +
            " " + formatDate(date.getHours()) +
            ":" + formatDate(date.getMinutes()) +
            ":" + formatDate(date.getSeconds());
    }


    /**
     * 在页面加载完毕后会触发该事件
     */
    // onload = function () {
    //     init();
    // }

    window.init = init;
})();