/**
 * Created by plter on 10/13/16.
 */

(function () {

    function Hello() {

    }

    Hello.prototype.sayHello = function () {
        console.log("Hello World");
    };

    window.Hello = Hello;

})();