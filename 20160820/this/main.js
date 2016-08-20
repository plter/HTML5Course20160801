/**
 * Created by plter on 8/20/16.
 */

(function () {

    function Main() {
        // console.log(this);

        // setTimeout(function () {
        //     console.log(this);
        // }.bind(this), 1000);


        // var func = function () {
        //     console.log(this);
        // }.bind(window);
        //
        // func();

        // this.sayHello.bind(window)();

        var sh = this.sayHello.bind(this);
        sh.apply(window);
    }


    Main.prototype.sayHello = function () {
        console.log(this);
    };


    var m = new Main();
    m.sayHello();

    var a = new Main();
    a.sayHello();
})();