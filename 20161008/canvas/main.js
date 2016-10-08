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

    function drawRect() {

        var rect = new ucai.Rectangle(100, 100);
        rect.x = 100;
        rect.y = 100;
        rect.color = "#000000";
        rect.render(context);

        var circle = new ucai.Circle(50);
        circle.color = "#ff0000";
        circle.x = 50;
        circle.y = 50;
        circle.render(context);
    }

    function init() {
        createCanvas();
        drawRect();
    }

    init();
})();