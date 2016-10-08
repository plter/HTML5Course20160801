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
        document.body.appendChild(canvas);

        context = canvas.getContext("2d");
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

        ucai.PropertyAnimation(rect, "x", 100, 200, 200);
    }

    init();
})();