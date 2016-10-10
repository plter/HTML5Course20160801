/**
 * Created by plter on 10/10/16.
 */

(function () {

    var video = document.getElementById("video");

    function init() {
        navigator.mediaDevices.getUserMedia({
            audio: false, video: true
        }).then(function (result) {
            video.srcObject = result;
        }).catch(function (error) {
            console.log(error);
        });
    }

    init();

})();