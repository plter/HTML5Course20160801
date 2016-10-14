/**
 * Created by plter on 10/14/16.
 */

(function () {

    // $.ajax("data.txt").done(function (data) {
    //     console.log(data);
    // }).fail(function (err) {
    //     console.log(err);
    // });

    // $.ajax({url: "/data", method: "post"}).done(function (data) {
    //     console.log(data);
    // }).fail(function (err) {
    //     console.log(err);
    // });

    // $.ajax({
    //     url: "/data",
    //     method: "post",
    //     // dataType: "json",
    //     error: function (jqXHR, textStatus, error) {
    //         console.log(arguments);
    //     },
    //     complete: function (jqXHR, textStatus) {
    //         // console.log(arguments);
    //         console.log("complete:", jqXHR.responseText);
    //     }
    // }).done(function (data) {
    //     console.log("done:", data);
    // });

    // $.ajax({
    //     url: "/data",
    //     method: "post",
    //     error: function (jqXHR, textStatus, error) {
    //         console.log(arguments);
    //     },
    //     complete: function (jqXHR, textStatus) {
    //         // console.log(arguments);
    //         console.log("complete:", jqXHR.responseText);
    //     }
    // });

    $.ajax({
        url: "/data",
        method: "post",
        data: {name: "ucai"}
    }).done(function (data) {
        console.log(data);
    });
    console.log("Hello World");
})();