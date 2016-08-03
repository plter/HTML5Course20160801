/**
 * Created by plter on 8/3/16.
 */


//与外界隔离的独立作用域被称为闭包,使用函数实现该功能称为函数闭包
(function () {
    function hello() {
        console.log("Hello World");
    }

    hello();
})();
