/**
 * Created by plter on 8/26/16.
 */


(function () {


    function add(a, b) {
        if (typeof a != "number") {
            throw new Error("传入的第一个参数不是数字");
        }
        if (typeof b != "number") {
            throw new Error("传入的第二个参数不是数字");
        }

        return a + b;
    }

    try {
        console.log(add(2, 3));
    } catch (error) {
        console.log(error);
    } finally {
        console.log("finally");
    }

})();