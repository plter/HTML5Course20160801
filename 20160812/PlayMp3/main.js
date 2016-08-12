/**
 * Created by plter on 8/11/16.
 */


(function () {

    $.get("Heartbeats.lrc").done(function (data) {


        var p = /\[(\d{2}):(\d{2})\.\d{2}\](.+)/g;

        while (true) {
            var result = p.exec(data);

            if (result) {
                var min = parseInt(result[1]);
                var sec = parseInt(result[2]);
                var content = result[3];

                console.log(min * 60 + sec, content);
            } else {
                break;
            }
        }

    });

})();