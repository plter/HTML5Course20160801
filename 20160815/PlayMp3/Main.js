/**
 * Created by plter on 8/15/16.
 */


(function () {

    var lrcMap = {};
    var player = document.querySelector("#player");
    var lrcDiv = document.querySelector("#lrcdiv");

    $.get("Heartbeats.lrc").done(function (data) {

        var p = /\[(\d{2}):(\d{2})\.\d{2}\](.+)/g;

        var result;
        while ((result = p.exec(data)) != null) {
            lrcMap[parseInt(result[1]) * 60 + parseInt(result[2])] = result[3];
        }
    });

    setInterval(function () {
        var content = lrcMap[Math.round(player.currentTime)];
        if (content) {
            lrcDiv.innerHTML = content;
        }
    }, 1000);

})();