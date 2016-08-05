/**
 * Created by plter on 8/5/16.
 */

(function () {

    setTimeout(function () {
        console.log("Hello JS");
    }, 3000);


    var index = 0;
    var timerId = setInterval(function () {
        console.log("Hello " + index);

        index++;

        if (index >= 10) {
            clearInterval(timerId);
        }
    }, 1000);

})();