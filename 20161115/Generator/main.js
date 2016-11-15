/**
 * Created by plter on 2016/11/15.
 */

(function () {

    function get(url, generator) {
        var result = {};
        $.get(url).done(function (data) {
            result.data = data;
            generator.next();
        });
        return result;
    }

    function *run() {
        var result = get("data.txt", g);
        yield;
        console.log(result.data);
    }

    let g = run();
    g.next();
})();