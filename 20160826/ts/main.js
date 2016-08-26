/**
 * Created by plter on 8/26/16.
 */
//TypeScript
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// (function () {
//
//     var a:string = "Hello World";
//
//     function add(a: number, b: number): number {
//         return a + b;
//     }
//
//     console.log(add(2, 3));
//
// })();
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.sayHello = function () {
        console.log("Hello TypeScript");
    };
    return Hello;
}());
var Hi = (function (_super) {
    __extends(Hi, _super);
    function Hi() {
        _super.apply(this, arguments);
    }
    Hi.prototype.sayHi = function () {
        console.log("Hi");
    };
    Hi.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this);
    };
    return Hi;
}(Hello));
(function () {
    var h = new Hello();
    h.sayHello();
    var hi = new Hi();
    hi.sayHi();
})();
//# sourceMappingURL=main.js.map