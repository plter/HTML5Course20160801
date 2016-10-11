/**
 * Created by plter on 10/11/16.
 */

(function () {

    var btnShowCamera, btnSnap, camera, videoElement;

    //用于编辑照片的Canvas
    var editPhotoCanvas;
    var editPhotoCanvasContext;

    //用于遮罩的矩形
    var clipRect = new hi.ClipRect(100, 50, 200, 200);
    var dragOffsetX, dragOffsetY;

    //拍照所使用的Canvas
    var snappedPhotoCanvas = document.createElement("canvas");
    snappedPhotoCanvas.width = 400;
    snappedPhotoCanvas.height = 300;
    var snappedPhotoCanvasContext = snappedPhotoCanvas.getContext("2d");

    var editPhotoContainer;
    var previewCanvas;
    var previewCanvasContext;

    var btnSaveImage;

    function findUIControls() {
        editPhotoContainer = $("#edit-photo-container");
        editPhotoContainer.hide();

        editPhotoCanvas = $("#canvas");
        editPhotoCanvasContext = editPhotoCanvas[0].getContext("2d");

        previewCanvas = $("#preview");
        previewCanvasContext = previewCanvas[0].getContext("2d");

        videoElement = $("#video");

        camera = $("#camera");
        camera.hide();

        btnShowCamera = $("#btn-show-camera");
        btnShowCamera.button();

        btnSnap = $("#btn-snap");
        btnSnap.button();

        btnSaveImage = $("#btn-save-image");
        btnSaveImage.button();
    }

    function addListeners() {
        btnShowCamera.on("click", function () {
            showCamera();
            editPhotoContainer.hide();
        });

        btnSnap.on("click", function () {
            snapVideoToCanvas();
        });

        btnSaveImage.on("click", function () {
            window.open(previewCanvas[0].toDataURL());
        });

        editPhotoCanvas.on("mousedown", function (e) {

            dragOffsetX = clipRect.x - e.offsetX;
            dragOffsetY = clipRect.y - e.offsetY;

            editPhotoCanvas.on("mousemove", function (mouseMoveEvent) {
                clipRect.x = mouseMoveEvent.offsetX + dragOffsetX;
                clipRect.y = mouseMoveEvent.offsetY + dragOffsetY;

                drawEditPhotoCanvas();
            });
            editPhotoCanvas.on("mouseup", function (mouseUpEvent) {
                editPhotoCanvas.off("mousemove");
                editPhotoCanvas.off("mouseup");
            });
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
        editPhotoContainer.show();

        snappedPhotoCanvasContext.clearRect(0, 0, 400, 300);
        snappedPhotoCanvasContext.drawImage(videoElement[0], 0, 0, 400, 300);

        drawEditPhotoCanvas();
    }

    function drawEditPhotoCanvas() {
        editPhotoCanvasContext.clearRect(0, 0, 400, 300);

        editPhotoCanvasContext.save();
        editPhotoCanvasContext.drawImage(snappedPhotoCanvas, 0, 0, 400, 300);
        editPhotoCanvasContext.restore();

        editPhotoCanvasContext.save();
        editPhotoCanvasContext.globalAlpha = 0.5;
        editPhotoCanvasContext.fillStyle = "#ffffff";
        editPhotoCanvasContext.fillRect(0, 0, 400, 300);
        editPhotoCanvasContext.restore();

        editPhotoCanvasContext.save();
        clipRect.draw(editPhotoCanvasContext);
        editPhotoCanvasContext.drawImage(snappedPhotoCanvas, 0, 0, 400, 300);
        editPhotoCanvasContext.restore();

        drawPreviewCanvas();
    }

    function drawPreviewCanvas() {
        previewCanvasContext.clearRect(0, 0, 200, 200);
        previewCanvasContext.drawImage(snappedPhotoCanvas, clipRect.x, clipRect.y, 200, 200, 0, 0, 200, 200);
    }

    function init() {
        findUIControls();
        addListeners();
    }

    init();
})();