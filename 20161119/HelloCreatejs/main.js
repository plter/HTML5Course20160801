/**
 * Created by plter on 2016/11/19.
 */

(function () {

    var stage = new createjs.Stage("canvas");

    stage.addChild(new Rect());

    createjs.Ticker.addEventListener("tick", stage);
})();