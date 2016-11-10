/**
 * Created by plter on 2016/11/10.
 */

window.ucai = window.ucai || {};

(function () {

    function Hello() {

    }

    Hello.prototype.sayHello = function () {
        console.log("Hello gulp");
    };

    ucai.Hello = Hello;
})();