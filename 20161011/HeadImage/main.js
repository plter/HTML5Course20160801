/**
 * Created by plter on 10/11/16.
 */

(function () {

    var btnShowCamera, btnSnap, camera, videoElement, canvas;
    var context;

    function findUIControls() {
        canvas = $("#canvas");
        context = canvas[0].getContext("2d");
        canvas.hide();
        videoElement = $("#video");

        camera = $("#camera");
        camera.hide();

        btnShowCamera = $("#btn-show-camera");
        btnShowCamera.button();

        btnSnap = $("#btn-snap");
        btnSnap.button();
    }

    function addListeners() {
        btnShowCamera.on("click", function () {
            showCamera();
            canvas.hide();
        });

        btnSnap.on("click", function () {
            snapVideoToCanvas();
        });
    }

    function showCamera() {
        camera.show();

        navigator.mediaDevices.getUserMedia({audio: false, video: {width: 400, height: 300}}).then(function (stream) {

            videoElement.prop("srcObject", stream);
        }).catch(function (error) {
            console.error(error);
            alert("您拒绝了使用摄像头");
        });
    }

    function snapVideoToCanvas() {
        camera.hide();
        canvas.show();

        drawCanvas();
    }

    function drawCanvas() {
        context.save();
        context.drawImage(videoElement[0], 0, 0, 400, 300);
        context.restore();

        context.save();
        context.globalAlpha = 0.5;
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, 400, 300);
        context.restore();

        context.save();

        context.beginPath();
        context.rect(0, 0, 200, 200);
        context.closePath();
        context.clip();

        context.drawImage(videoElement[0], 0, 0, 400, 300);
        context.restore();
    }

    function init() {
        findUIControls();
        addListeners();
    }

    init();
})();