/**
 * Created by plter on 2016/11/8.
 */
var ucai;
(function (ucai) {
    var Hello = (function () {
        function Hello() {
        }
        Hello.prototype.sayHello = function () {
            console.log("Hello TypeScript");
        };
        return Hello;
    }());
    ucai.Hello = Hello;
})(ucai || (ucai = {}));
//# sourceMappingURL=Hello.js.map