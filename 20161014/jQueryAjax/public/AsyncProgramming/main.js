/**
 * Created by plter on 10/14/16.
 */

(function () {

    // $.get("data1.txt").done(function (data) {
    //     console.log(data);
    //
    //     $.get("data2.txt").done(function (data) {
    //         console.log(data);
    //
    //         $.get("data3.txt").done(function (data) {
    //             console.log(data);
    //         }).fail(function (err) {
    //             console.log("data3.txt");
    //         });
    //     }).fail(function (err) {
    //         console.log("data2.txt 加载失败");
    //     })
    // }).fail(function (err) {
    //     console.log("data1.txt 加载失败");
    // });

    function load(url) {
        return new Promise(function (resovle, reject) {
            $.get(url).done(resovle).fail(reject);
        });
    }


    load("data1.txt").then(function (result) {
        console.log(result);

        return load("data2.txt")
    }).then(function (result) {
        console.log(result);

        return load("data3.txt");
    }).then(function (result) {
        console.log(result);
    }).catch(function (err) {
        console.log("加载失败", err);
    });

})();