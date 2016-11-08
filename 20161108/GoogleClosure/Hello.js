/**
 * Created by plter on 2016/11/8.
 */

window.ucai = window.ucai || {};

(function () {

    class Hello {

        sayHello() {
            console.log("Hello ES6");
        }
    }

    ucai.Hello = Hello;
})();