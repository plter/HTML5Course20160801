/**
 * Created by plter on 10/12/16.
 */

(function () {

    var canvas = document.querySelector("#canvas");
    var context = canvas.getContext("2d");
    var storage = localStorage;
    var path;

    function canvasMouseMoveHandler(mouseMoveEvent) {
        context.lineTo(mouseMoveEvent.offsetX, mouseMoveEvent.offsetY);
        context.stroke();

        path.push({command: "lineTo", x: mouseMoveEvent.offsetX, y: mouseMoveEvent.offsetY});
    }

    function canvasMouseUpHandler() {
        canvas.removeEventListener("mousemove", canvasMouseMoveHandler);
        canvas.removeEventListener("mouseup", canvasMouseUpHandler);

        storage.setItem("path", JSON.stringify(path));
    }

    function addListeners() {

        canvas.addEventListener("mousedown", function (mouseDownEvent) {
            context.moveTo(mouseDownEvent.offsetX, mouseDownEvent.offsetY);
            path.push({command: "moveTo", x: mouseDownEvent.offsetX, y: mouseDownEvent.offsetY});

            canvas.addEventListener("mousemove", canvasMouseMoveHandler);
            canvas.addEventListener("mouseup", canvasMouseUpHandler);
        });
    }

    function readPath() {
        path = storage.getItem("path");
        if (path) {
            path = JSON.parse(path);
        }

        if (path) {
            var item;
            for (var i = 0; i < path.length; i++) {
                item = path[i];

                context[item.command](item.x, item.y);
            }

            context.stroke();
        } else {
            path = [];
        }
    }

    function init() {
        readPath();
        addListeners();
    }

    init();
})();