/**
 * Created by plter on 10/10/16.
 */

(function () {

    var canvas = document.getElementById("canvas");
    /**
     *
     * @type {HTMLVideoElement}
     */
    var video = document.getElementById("video");
    var context = canvas.getContext("2d");
    var ratio = 1;

    // function loadImage() {
    //     // var img = document.createElement("img");
    //     var img = new Image();
    //     img.onload = function () {
    //         context.drawImage(img, 0, 0);
    //     };
    //     img.src = "photo.jpg";
    // }
    //
    // loadImage();

    function addListeners() {
        video.addEventListener("loadedmetadata", function (e) {
            console.log(video.videoWidth, video.videoHeight);
            ratio = 400 / video.videoWidth;
        });
    }

    function render() {

        context.save();
        context.scale(ratio, ratio);

        context.drawImage(video, 0, 0);
        context.restore();

        requestAnimationFrame(render);
    }


    function init() {
        addListeners();
        render();
    }

    init();


})();