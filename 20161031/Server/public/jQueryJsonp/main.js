/**
 * Created by plter on 2016/10/31.
 */

(function () {

    // $.get("http://localhost:3000/data").done(function (data) {
    //     console.log(data);
    // });

    $.ajax({
        url: "http://localhost:3000/data.jueryjsonp",
        method: "GET",
        dataType: "jsonp"
    }).done(function (data) {
        console.log(data);
    });

})();