/**
 * Created by plter on 8/11/16.
 */


(function () {

    // var player = document.querySelector("#player");
    //
    // setInterval(function () {
    //
    //     console.log(player.currentTime);
    //
    // }, 1000);

    $.get("Heartbeats.lrc").done(function (data) {
        console.log(data);
    });


})();