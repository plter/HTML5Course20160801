/**
 * Created by plter on 8/11/16.
 */


(function () {

    var player = document.querySelector("#player");
    var lrcContainer = document.querySelector("#lrccontainer")
    var lrc = null;

    function parseLrc(lrcString) {
        var lrcObject = {};
        var lines = lrcString.split("\n");
        var line, position;

        for (var i = 0; i < lines.length; i++) {
            line = lines[i];

            position = line.indexOf(":");
            if (position != -1) {
                var minStr = line.substring(position - 2, position);
                var min = parseInt(minStr);

                if (!isNaN(min)) {
                    var secStr = line.substr(position + 1, 2);
                    var sec = parseInt(secStr);
                    if (!isNaN(sec)) {
                        var time = min * 60 + sec;

                        position = line.indexOf("]");
                        if (position != -1) {
                            lrcObject[time] = line.substr(position + 1);
                        } else {
                            console.error("非法的行: " + line);
                        }
                    } else {
                        console.error("非法的行: " + line);
                    }
                } else {
                    console.error("非法的行: " + line);
                }
            }
        }

        return lrcObject;
    }


    $.get("Heartbeats.lrc").done(function (data) {
        lrc = parseLrc(data);
    });

    setInterval(function () {
        if (lrc) {
            var content = lrc[Math.floor(player.currentTime)];
            if (content) {
                // console.log(content);
                lrcContainer.innerHTML = content;
            }
        }
    }, 1000);

})();