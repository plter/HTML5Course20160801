///<reference path="Hello.ts"/>
/**
 * Created by plter on 2016/11/8.
 */
var ucai;
(function (ucai) {
    var Main = (function () {
        function Main() {
            var h = new ucai.Hello();
            h.sayHello();
        }
        return Main;
    }());
    ucai.Main = Main;
})(ucai || (ucai = {}));
new ucai.Main();
//# sourceMappingURL=Main.js.map