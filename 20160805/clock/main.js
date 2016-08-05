/**
 * Created by plter on 8/5/16.
 */


(function () {

    var clock = document.querySelector("#clock");

    function formatTime(num) {
        return (num < 10 ? "0" : "") + num;
    }

    function showTime() {

        var date = new Date();

        clock.innerHTML = formatTime(date.getHours()) +
            ":" + formatTime(date.getMinutes()) +
            ":" + formatTime(date.getSeconds());
    }

    setInterval(showTime, 1000);

    showTime();
})();