/**
 * Created by plter on 2016/11/19.
 */

(function () {

    var stage = new createjs.Stage("canvas");

    stage.addChild(new Rect());

    // var img = new createjs.Bitmap("image.jpg");
    // stage.addChild(img);

    // var txt = new createjs.Text("Hello World");
    // stage.addChild(txt);
    // txt.addEventListener("click", function (e) {
    //     alert("txt clicked");
    // });

    // stage.update();
    createjs.Ticker.addEventListener("tick", stage);
})();