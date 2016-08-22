/**
 * Created by plter on 8/22/16.
 */


(function () {

    // var city = {myName: "西安"};
    //
    // function sayHello() {
    //     console.log("你好," + this.myName);
    // }
    //
    // sayHello.call(city);


    // function hi() {
    //     console.log("hi");
    // }
    //
    // /**
    //  *
    //  * @type {Function}
    //  */
    // var h = hi;
    // h.call();


    var btn = document.createElement("button");
    btn.innerHTML = "Click me";
    document.body.appendChild(btn);

    // btn.onclick = function (e) {
    //     console.log(this);
    // }
    btn.addEventListener("click", function (e) {
        console.log(this);
    });
})();