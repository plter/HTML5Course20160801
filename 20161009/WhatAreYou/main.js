/**
 * Created by plter on 10/9/16.
 */


(function () {

    var canvas;
    /**
     * @type {CanvasRenderingContext2D}
     */
    var context;

    var titleText;
    var btnImHuman;
    var btnImPig;

    function createCanvas() {
        canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 300;
        document.body.appendChild(canvas);

        context = canvas.getContext("2d");
    }

    function createTitleText() {
        titleText = new ucai.Text(context, "请告诉我你是什么？");
        titleText.y = 20;
        titleText.x = (canvas.width - titleText.textWidth) / 2;
    }

    function createImHumanButton() {
        btnImHuman = new ucai.Button(context, "我是人");
        btnImHuman.x = 150;
        btnImHuman.y = 100;
    }

    function createImPigButton() {
        btnImPig = new ucai.Button(context, "我是猪");
        btnImPig.x = btnImHuman.x + btnImHuman.textWidth + 30;
        btnImPig.y = 100;
    }

    function addListeners() {
        canvas.onclick = function (e) {
            if (btnImPig.hitTestPoint(e.offsetX, e.offsetY)) {
                alert("答对了");
            }
            if (btnImHuman.hitTestPoint(e.offsetX, e.offsetY)) {
                alert("你太厉害了，确实是个人");
            }
        };

        canvas.onmousemove = function (e) {
            if (btnImHuman.hitTestPoint(e.offsetX, e.offsetY)) {
                btnImHuman.x = Math.random() * 300;
                btnImHuman.y = Math.random() * 260;
            }
        }
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function render() {
        clearCanvas();

        titleText.render();
        btnImHuman.render();
        btnImPig.render();

        requestAnimationFrame(render);
    }

    function init() {
        createCanvas();
        createTitleText();
        createImHumanButton();
        createImPigButton();
        addListeners();
        render();

    }

    init();
})();