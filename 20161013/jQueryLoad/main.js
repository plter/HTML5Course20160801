/**
 * Created by plter on 10/13/16.
 */

(function () {

    // $.get("data1.txt", function () {
    //     console.log(arguments);
    // });

    // $.get("data1.txt").done(function (data) {
    //     console.log(data);
    // }).fail(function (error) {
    //     console.log(error);
    // });

    // $.getJSON("data.json").done(function (data) {
    //     console.log(data);
    // });


    $.getScript("hello.js").done(function (data) {
        var h = new Hello();
        h.sayHello();
    });

})();