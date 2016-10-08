/**
 * Created by plter on 10/8/16.
 */


(function () {

    var CANVAS_WIDTH = 400, CANVAS_HEIGHT = 300;

    /**
     * @type {HTMLCanvasElement}
     */
    var canvas;
    /**
     * @type {CanvasRenderingContext2D}
     */
    var context;

    var rect;

    function createCanvas() {
        canvas = document.createElement("canvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        // canvas.style.border = "solid";
        document.body.appendChild(canvas);

        context = canvas.getContext("2d");

        canvas.onclick = canvasEventHandler;
        // canvas.addEventListener("touchmove", canvasEventHandler);
    }

    function canvasEventHandler(e) {

        //早期浏览器
        // var mouseX = -1, mouseY = -1;
        // if (e.hasOwnProperty("offsetX")) {
        //     mouseX = e.offsetX;
        // }
        // if (mouseX == -1) {
        //     if (e.hasOwnProperty("layerX")) {
        //         mouseX = e.layerX;
        //     }
        // }
        // if (e.hasOwnProperty("offsetY")) {
        //     mouseY = e.offsetY;
        // }
        // if (mouseY == -1) {
        //     if (e.hasOwnProperty("layerY")) {
        //         mouseY = e.layerY;
        //     }
        // }

        // var mouseX = e.offsetX || e.layerX;
        // var mouseY = e.offsetY || e.layerY;

        // console.log("offset(" + e.offsetX + "," + e.offsetY + "),layer(" + e.layerX + "," + e.layerY + ")");

        if (e.layerX > rect.x &&
            e.layerY > rect.y &&
            e.layerX < rect.x + rect.width &&
            e.layerY < rect.y + rect.height) {

            ucai.PropertyAnimation(rect, "x", 0, 300, 50);
        }

        console.log(e);
    }

    function clearCanvas() {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    function createRectangle() {
        rect = new ucai.Rectangle(100, 100);
        // rect.x = 100;
        rect.y = 100;
        rect.color = "#000000";

        render();
    }

    function render() {

        ucai.RenderHandler.runHandlers();

        clearCanvas();

        rect.render(context);

        requestAnimationFrame(render);
    }

    // function move() {
    //     var id = setInterval(function () {
    //         rect.x++;
    //
    //         clearCanvas();
    //         rect.render(context);
    //
    //         if (rect.x > 200) {
    //             clearInterval(id);
    //         }
    //     }, 20);
    // }

    function init() {
        createCanvas();
        createRectangle();
        render();

        // ucai.PropertyAnimation(rect, "x", 100, 200, 2000);
    }

    init();
})();