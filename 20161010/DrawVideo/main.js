/**
 * Created by plter on 10/10/16.
 */

(function () {


    var videoWidth = 320;
    var videoHeight = 240;
    var canvas = document.getElementById("canvas");
    var memoryCanvas = document.createElement("canvas");
    memoryCanvas.width = 400;
    memoryCanvas.height = 300;
    var context = canvas.getContext("2d");
    var memoryContext = memoryCanvas.getContext("2d");
    var targetBitmap = memoryContext.createImageData(videoWidth, videoHeight);


    /**
     * @type {HTMLVideoElement}
     */
    var video;

    function loadVideo() {
        video = document.createElement("video");
        video.autoplay = true;
        video.src = "video.mp4";
    }

    function render() {

        // context.drawImage(video, 0, 0);

        memoryContext.drawImage(video, 0, 0);
        var sourceImageData = memoryContext.getImageData(0, 0, videoWidth, videoHeight);

        for (var i = 0; i < sourceImageData.data.length; i += 4) {
            var r = sourceImageData.data[i];
            var g = sourceImageData.data[i + 1];
            var b = sourceImageData.data[i + 2];

            var c = (r + g + b) / 3;

            targetBitmap.data[i] = c;
            targetBitmap.data[i + 1] = c;
            targetBitmap.data[i + 2] = c;
            targetBitmap.data[i + 3] = 255;
        }

        context.putImageData(targetBitmap, 0, 0);

        requestAnimationFrame(render);
    }

    function init() {
        loadVideo();
        render();
    }

    init();
})();